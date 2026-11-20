import { GUIDEBOOK_DATA, IconName, iconMap } from "@/constants/guidebook";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "@/styles/home.css";
import "@/styles/guidebook.css";

// The case descriptions appear automatically on the event day at 7:00 (Madrid time).
// Until then, this text is shown instead. Preview them earlier with /guidebook?preview=day
const CASES_VISIBLE_FROM = "2026-11-21T07:00:00+01:00";
const CASES_PLACEHOLDER =
	"The descriptions of the 2 exciting cases for CDTM Valencia Hacks 2026 will be published here and presented during the kick-off on 21st November.";
const casesVisible = () =>
	(typeof window !== "undefined" &&
		new URLSearchParams(window.location.search).get("preview") === "day") ||
	new Date() >= new Date(CASES_VISIBLE_FROM);
// Inside any text: <!--day-->...<!--/day--> only shows from that moment,
// and <!--pre-->...<!--/pre--> only shows before it.
const byDay = (html: string) =>
	casesVisible()
		? html.replace(/<!--pre-->[\s\S]*?<!--\/pre-->/g, "")
		: html.replace(/<!--day-->[\s\S]*?<!--\/day-->/g, "");
const contentOf = (subsection: { id: string; content: string }) =>
	subsection.id === "descriptions" && !casesVisible() ? CASES_PLACEHOLDER : byDay(subsection.content);

// Display only: removes extra blank lines and hidden comments from the texts in
// src/constants/guidebook.ts so they read cleanly. The texts themselves are not changed.
const BLOCK = "h3|h4|table|thead|tbody|tr|th|td|iframe|p|ul|ol|li|div";
const tidy = (html: string) =>
	html
		.replace(/<!--[\s\S]*?-->/g, "")
		.replace(/[ \t]+\n/g, "\n")
		.replace(/\n[ \t]+/g, "\n")
		// Lines that start with "•" are shown as a tidy list
		.replace(/(^|\n)((?:•[^\n]*(?:\n|$))+)/g, (_m, start: string, block: string) => {
			const items = block
				.split("\n")
				.filter((l) => l.trim().startsWith("•"))
				.map((l) => `<li>${l.trim().replace(/^•\s*/, "")}</li>`)
				.join("");
			return `${start}<ul class="gb-list">${items}</ul>\n`;
		})
		.replace(new RegExp(`\\s*(<\\/?(?:${BLOCK})\\b[^>]*>)\\s*`, "g"), "$1")
		.replace(/<br\s*\/?>\s*\n/g, "<br />")
		.replace(/\n{3,}/g, "\n\n")
		.trim()
		.replace(/^<(h3|h4)\b/, "<$1 data-first");

// Helper function to render an icon by name
const renderIcon = (name: IconName, size: number, color?: string) => {
	const IconComponent = iconMap[name];
	return (
		<IconComponent
			size={size}
			color={color}
		/>
	);
};

const Guidebook = () => {
	const [activeSection, setActiveSection] = useState(GUIDEBOOK_DATA[0].id);
	// Checks the time every 30 seconds, so the cases appear at 7:00
	// even if someone opened the page earlier and didn't reload it
	const [, setTick] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => setTick((t) => t + 1), 30000);
		return () => clearInterval(timer);
	}, []);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<
		Array<{ section: string; subsection: string; title: string }>
	>([]);
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

	// Helper to get all subsection IDs for expanded accordions
	const allSubsectionIds = GUIDEBOOK_DATA.flatMap((section) =>
		section.subsections.map((sub) => sub.id)
	);

	// Handle search functionality
	useEffect(() => {
		if (searchQuery.trim() === "") {
			setSearchResults([]);
			return;
		}

		const query = searchQuery.toLowerCase();
		const results = GUIDEBOOK_DATA.flatMap((section) =>
			section.subsections
				.filter(
					(subsection) =>
						subsection.title.toLowerCase().includes(query) ||
						contentOf(subsection).toLowerCase().includes(query)
				)
				.map((subsection) => ({
					section: section.id,
					subsection: subsection.id,
					title: subsection.title,
				}))
		);

		setSearchResults(results);
	}, [searchQuery]);

	// Highlight the section you are reading in the side menu
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ rootMargin: "-30% 0px -60% 0px" }
		);
		Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
		return () => observer.disconnect();
	}, []);

	// Scroll to section when nav item is clicked
	const scrollToSection = (sectionId: string) => {
		setActiveSection(sectionId);
		const element = sectionRefs.current[sectionId];
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	// Scroll to subsection from search results or navigation
	const scrollToSubsection = (sectionId: string, subsectionId: string) => {
		setActiveSection(sectionId);
		const anchorId = `${sectionId}-${subsectionId}`;
		// Update the URL hash
		window.location.hash = `#${anchorId}`;
		// Scroll to the anchor
		const anchorElement = document.getElementById(anchorId);
		if (anchorElement) {
			anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		// Expand the accordion if not already open
		const accordionTrigger = document.getElementById(
			`accordion-trigger-${subsectionId}`
		);
		if (
			accordionTrigger &&
			accordionTrigger.getAttribute("aria-expanded") !== "true"
		) {
			accordionTrigger.click();
		}
		setSearchQuery("");
	};

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const ids = hash.substring(1).split("-");
			if (ids.length >= 2) {
				// Check if there are at least two parts (section and subsection)
				const sectionId = ids[0];
				const subsectionId = ids.slice(1).join("-"); // Join the rest for subsectionId in case it contains hyphens
				// Check if the section and subsection exist in GUIDEBOOK_DATA
				const sectionExists = GUIDEBOOK_DATA.some((s) => s.id === sectionId);
				const subsectionExists = GUIDEBOOK_DATA.some(
					(s) =>
						s.id === sectionId &&
						s.subsections.some((sub) => sub.id === subsectionId)
				);

				if (sectionExists && subsectionExists) {
					// Delay slightly to ensure the page has rendered
					setTimeout(() => {
						scrollToSubsection(sectionId, subsectionId);
					}, 100);
				}
			}
		}
	}, []); // Empty dependency array ensures this runs only once on mount

	return (
		<div className="vh gb">
			{/* Header (same as the homepage) */}
			<header className="vh-header gb-header">
				<div className="vh-header-in">
					<a href="/" className="vh-brand" aria-label="CDTM Valencia Hacks home">
						<img src="/home/cdtm-vlc-white.png" alt="CDTM Valencia" />
						<span className="vh-brand-sep" aria-hidden="true" />
						<span className="vh-brand-txt">HACKS</span>
					</a>
					<nav className="vh-nav">
						<a href="/">Home</a>
						<a className="vh-nav-guide is-active" href="/guidebook">Guidebook</a>
					</nav>
				</div>
			</header>

			{/* Hero */}
			<section className="gb-hero">
				<div className="vh-wrap gb-hero-in">
					<span className="vh-label">21 Nov 2026 · The Terminal Hub</span>
					<h1>
						<span className="vh-mask"><span>Hackathon Guidebook</span></span>
					</h1>
					<p className="gb-hero-sub">
						Everything you need to know about CDTM Valencia Hacks 2026
					</p>
				</div>
			</section>

			{/* Search bar */}
			<div className="gb-search">
				<div className="vh-wrap gb-search-in">
					<div className="gb-search-box">
						<Search className="gb-search-icon" aria-hidden="true" />
						<input
							type="text"
							placeholder="Search the guidebook..."
							aria-label="Search the guidebook"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					{/* Search results */}
					{searchResults.length > 0 && (
						<ul className="gb-results">
							{searchResults.map((result, index) => (
								<li key={index}>
									<button
										onClick={() =>
											scrollToSubsection(result.section, result.subsection)
										}>
										<span className="gb-results-sec">
											{GUIDEBOOK_DATA.find((s) => s.id === result.section)?.title}
										</span>
										<span>{result.title}</span>
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
				<div className="vh-progress" aria-hidden="true" />
			</div>

			{/* Navigation and content */}
			<div className="vh-wrap gb-body">
				{/* Side navigation */}
				<aside className="gb-side">
					<nav className="gb-side-in">
						{GUIDEBOOK_DATA.map((section) => (
							<div key={section.id} className="gb-side-group">
								<button
									onClick={() => scrollToSection(section.id)}
									className={`gb-side-sec${activeSection === section.id ? " is-active" : ""}`}>
									<span className="gb-side-icon">{renderIcon(section.icon, 15)}</span>
									{section.title}
								</button>
								<div className="gb-side-subs">
									{section.subsections.map((subsection) => (
										<button
											key={subsection.id}
											onClick={() => {
												scrollToSubsection(section.id, subsection.id);
											}}>
											{subsection.title}
										</button>
									))}
								</div>
							</div>
						))}
					</nav>
				</aside>

				{/* Main content */}
				<div className="gb-main">
					{GUIDEBOOK_DATA.map((section) => (
						<section
							key={section.id}
							id={section.id}
							ref={(el) => (sectionRefs.current[section.id] = el)}
							className="gb-section">
							<div className="gb-section-head">
								<h2>{section.title}</h2>
							</div>
							<span className="gb-rule vh-draw" aria-hidden="true" />

							<Accordion.Root type="multiple" className="gb-acc">
								{section.subsections.map((subsection) => (
									<div key={subsection.id} className="vh-st">
										{/* Unique anchor for direct linking */}
										<a id={`${section.id}-${subsection.id}`} className="gb-anchor"></a>
										<Accordion.Item
											value={subsection.id}
											id={subsection.id}
											className="gb-item">
											<Accordion.Trigger
												id={`accordion-trigger-${subsection.id}`}
												className="gb-trigger">
												<span className="gb-trigger-l">
													<span className="gb-item-icon">
														{renderIcon(subsection.icon, 16)}
													</span>
													<span className="gb-item-title">{subsection.title}</span>
												</span>
												<span className="gb-plus" aria-hidden="true">+</span>
											</Accordion.Trigger>
											<Accordion.Content className="gb-content">
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ duration: 0.25 }}>
													<div
														className="gb-prose"
														dangerouslySetInnerHTML={{
															__html: tidy(contentOf(subsection)),
														}}
													/>
												</motion.div>
											</Accordion.Content>
										</Accordion.Item>
									</div>
								))}
							</Accordion.Root>
						</section>
					))}

				</div>
			</div>

			{/* Footer (same as the homepage) */}
			<footer className="vh-footer">
				<div className="vh-wrap vh-footer-in">
					<div className="vh-footer-main">
						<strong>CDTM VALENCIA HACKS 2026</strong>
						<span>Contact · <a href="mailto:vlc.hacks@cdtm.com">vlc.hacks@cdtm.com</a></span>
						<small>© 2026 CDTM Valencia</small>
					</div>
					<div className="vh-footer-links">
						<a href="https://kind-leader-37e.notion.site/CDTM-Hacks-2026-Terms-Conditions-public-3675dfc75bb7805fbbe9ea3bf075f30d" target="_blank" rel="noopener noreferrer">Terms &amp; conditions</a>
						<a href="https://cdtm.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy</a>
						<a href="https://cdtm.com/legal" target="_blank" rel="noopener noreferrer">Impressum</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Guidebook;
