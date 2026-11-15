import { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { applicationsAreOpen } from '@/lib/utils';
import '@/styles/home.css';
import {
  AFTER_EVENT_FROM,
  AGENDA,
  APPLY_URL,
  GUIDEBOOK_FROM,
  EVENT_DAY,
  FAQ,
  JUDGES,
  Logo,
  MAIN_SPONSORS,
  OTHER_SPONSORS,
  PRIZE_GROUPS,
  STATS,
  TESTIMONIALS,
} from '@/constants/home';

// Optical sizing so wide and tall logos look equally big
const logoSize = (l: Logo, area: number) => {
  const big = l.name === 'IDEAS UPV' ? 1.9 : 1;
  const max = l.name === 'IDEAS UPV' ? 64 : 40;
  const h = Math.max(14, Math.min(Math.sqrt((area * big) / l.ratio), max));
  return { width: Math.round(h * l.ratio), height: Math.round(h) };
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const Home = () => {
  // Preview the post-event version with ?preview=after
  const preview =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('preview') : null;
  const now = preview === 'day' ? new Date(EVENT_DAY) : new Date();
  const isAfter = preview === 'after' || now >= new Date(AFTER_EVENT_FROM);
  const isEventDay = !isAfter && now >= new Date(EVENT_DAY);
  // Uses the same deadline as the rest of the site (src/lib/utils.ts)
  const isOpen = !isAfter && preview !== 'closed' && applicationsAreOpen(now.getTime());
  const showGuidebook = !isAfter && !isOpen && (preview === 'day' || now >= new Date(GUIDEBOOK_FROM));
  const daysLeft = Math.ceil((new Date(EVENT_DAY).getTime() - now.getTime()) / 86400000);
  const countdown =
    isAfter || daysLeft < 0
      ? null
      : daysLeft > 1
        ? `${daysLeft} days to go`
        : daysLeft === 1
          ? '1 day to go'
          : 'Today';

  const [openFaq, setOpenFaq] = useState(-1);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setHeaderHidden(y > lastY.current && y > 160);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="vh">
      {/* Header */}
      <header className={`vh-header${headerHidden ? ' is-hidden' : ''}`}>
        <div className="vh-header-in">
          <a
            href="#top"
            className="vh-brand"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/home/cdtm-vlc-white.png" alt="CDTM Valencia" />
            <span className="vh-brand-sep" aria-hidden="true" />
            <span className="vh-brand-txt">HACKS</span>
          </a>
          <nav className="vh-nav">
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
            <a href="#speakers">Speakers</a>
            <a href="#prizes">Prizes</a>
            <a href="#organisers">Organisers</a>
            {showGuidebook && <a className="vh-nav-guide" href="/guidebook">Guidebook</a>}
            {isOpen && <a className="vh-nav-apply" href={APPLY_URL} {...ext}>Apply now</a>}
            {!isAfter && !isOpen && !isEventDay && !showGuidebook && <span className="vh-nav-pill">Applications closed</span>}
          </nav>
        </div>
        <div className="vh-progress" aria-hidden="true" />
      </header>

      {/* Hero */}
      <section className="vh-hero">
        <video
          className="vh-hero-video"
          src="/home/hero.mp4"
          poster="/home/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="vh-hero-shade">
          <div className="vh-wrap vh-hero-in">
            <h1>
              <span className="vh-mask"><span style={{ animationDelay: '.15s' }}>CDTM VALENCIA</span></span>
              <span className="vh-mask"><span className="vh-lime" style={{ animationDelay: '.32s' }}>HACKS 2026</span></span>
            </h1>
            <p className="vh-hero-tag vh-in vh-d3">
              {isAfter ? 'Thank you for an amazing day in Valencia.' : 'Where ideas bloom and innovation thrives.'}
            </p>
            <span className="vh-hero-date vh-in vh-d4">
              21ST NOV · TERMINAL HUB · 8:30–19:00
              {countdown && <span className="vh-lime vh-countdown">· {countdown.toUpperCase()}</span>}
            </span>
            {isAfter ? (
              <div className="vh-hero-cta vh-in vh-d4">
                <a className="vh-pill vh-pill-white" href="https://cdtm.com/valencia" {...ext}>Discover CDTM Valencia →</a>
                <span className="vh-hero-note">Winners and photos coming soon.</span>
              </div>
            ) : isOpen ? (
              <div className="vh-hero-cta vh-in vh-d4">
                <a className="vh-pill vh-pill-white" href={APPLY_URL} {...ext}>Apply →</a>
                <span className="vh-hero-deadline">Deadline 13/11 23:59</span>
              </div>
            ) : (
              <div className="vh-hero-cta vh-in vh-d4">
                <span className="vh-pill vh-pill-ghost">Applications closed</span>
                {!isEventDay && (
                  <span className="vh-hero-note vh-hero-status">
                    If you have been accepted, you should have received an email with your team. If not, you are on the waiting list.{' '}
                    <a className="vh-hero-link" href="mailto:vlc.hacks@cdtm.com">Contact us</a> for any doubts.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="vh-wrap vh-section vh-about">
        <div className="vh-about-head">
          <div className="vh-label">About the hackathon</div>
          <div className="vh-unis">
            <img src="/home/cdtm-vlc-dark.png" alt="CDTM Valencia" className="vh-uni-cdtm" />
            <span aria-hidden="true">×</span>
            <img src="/home/upv.png" alt="Universitat Politècnica de València" className="vh-uni-upv" />
            <span aria-hidden="true">×</span>
            <img src="/home/uv.png" alt="Universitat de València" className="vh-uni-uv" />
          </div>
        </div>
        <div className="vh-about-text">
          <h2>Empowering the innovators of tomorrow</h2>
          <p className="vh-lead">
            {isAfter
              ? 'CDTM Valencia Hacks brought together the brightest students with the CDTM Valencia ecosystem to collaborate, innovate, and build together. Thank you for a day of building and shared passion for technology and entrepreneurship.'
              : 'CDTM Valencia Hacks brings together the brightest students with the CDTM Valencia ecosystem to collaborate, innovate, and build together. Join us for a day of building and shared passion for technology and entrepreneurship.'}
          </p>
        </div>
        <div className="vh-stats">
          {STATS.map((s) => (
            <div className="vh-stat" key={s.value}>
              <span className="vh-arrow" aria-hidden="true">→</span>
              <p><strong>{s.value}</strong> {s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photos 2025 */}
      <section className="vh-photos">
        <img src="/home/photo-1.jpg" alt="Team working at VLC Hacks 2025" />
        <img src="/home/photo-2.jpg" alt="Team pitching at VLC Hacks 2025" />
        <img src="/home/photo-3.jpg" alt="Students coding at VLC Hacks 2025" />
      </section>

      {/* VLC Hacks 2025 */}
      <section className="vh-2025">
        <div className="vh-wrap vh-2025-in">
          <div className="vh-2025-intro">
            <span className="vh-label-sm">Building on the first edition</span>
            <h3>VLC Hacks 2025</h3>
            <p>The first edition featured challenges from HP, NTT DATA, IBM and LeapingAI (YC W24).</p>
            <a href="https://lnkd.in/p/ejDxFavZ" {...ext} className="vh-link">Watch the 2025 summary →</a>
          </div>
          {TESTIMONIALS.map((t) => (
            <figure className="vh-quote" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <a href={t.url} {...ext}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </a>
            </figure>
          ))}
        </div>
      </section>

      {/* Agenda (hidden after the event) */}
      {!isAfter && (
        <section className="vh-dark">
          <div className="vh-wrap vh-agenda">
            <div className="vh-label vh-lime">Agenda · 21 November</div>
            <div className="vh-timeline">
              <div className="vh-timeline-line vh-draw" aria-hidden="true" />
              <div className="vh-timeline-grid">
                {AGENDA.map((a) => (
                  <div className={`vh-step vh-st${a.muted ? ' is-muted' : ''}`} key={a.time + a.title}>
                    <span className="vh-dot" aria-hidden="true" />
                    <span className="vh-time">{a.time}</span>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      <section id="partners" className="vh-wrap vh-section vh-partners">
        <div className="vh-head">
          <div className="vh-label">Our partners</div>
          <h2>Built together with</h2>
        </div>
        {[{ tier: 'Main sponsors', logos: MAIN_SPONSORS, area: 3000 }, ...OTHER_SPONSORS.map((g) => ({ ...g, area: 2400 }))].map((g) => (
          <div className="vh-prow" key={g.tier}>
            <span className="vh-tier">{g.tier}</span>
            <div className="vh-plogos">
              {g.logos.map((l) => (
                <a href={l.url} {...ext} aria-label={`${l.name} website`} key={l.name} className="vh-st">
                  <img className="vh-plogo" src={l.src} alt={l.name} style={logoSize(l, g.area)} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Speakers & judges */}
      <section id="speakers" className="vh-dark">
        <div className="vh-wrap vh-section">
          <div className="vh-head">
            <div className="vh-label vh-lime">Speakers &amp; judges</div>
            <h2>{isAfter ? 'Thank you to our speakers & jury' : 'Learn from industry leaders'}</h2>
          </div>
          <div className="vh-judges">
            {JUDGES.map((j) => (
              <div className="vh-judge" key={j.name}>
                <a href={j.linkedin} {...ext} aria-label={`${j.name} on LinkedIn`} className="vh-judge-photo">
                  <img src={j.photo} alt={j.name} loading="lazy" />
                </a>
                <div className="vh-judge-name">
                  <span>{j.name}</span>
                  <a href={j.linkedin} {...ext} aria-label="LinkedIn profile">
                    <FaLinkedin size={20} aria-hidden="true" />
                  </a>
                </div>
                <span className="vh-judge-role">{j.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="vh-wrap vh-section vh-prizes">
        <div className="vh-head">
          <div className="vh-label">Prizes &amp; rewards</div>
          <h2>More than 7.000 € in prizes</h2>
          <p className="vh-sub">
            {isAfter
              ? 'Thank you to our partners for making these rewards possible. Winners will be announced here soon.'
              : 'Win incredible rewards, gain industry recognition, and open doors to new opportunities.'}
          </p>
        </div>
        {PRIZE_GROUPS.map((p) => (
          <div className="vh-pgroup" key={p.n}>
            <div className="vh-pgroup-head">
              <span className="vh-pgroup-n">{p.n}</span>
              <span className="vh-pgroup-t">{p.group}</span>
            </div>
            <div className="vh-pgroup-line vh-draw" aria-hidden="true" />
            <div className={`vh-pgrid vh-cols-${p.cols}`}>
              {p.items
                .filter((it) => !it.show || (it.show === 'after') === isAfter)
                .map((it) =>
                  it.placeholder ? (
                    <div className="vh-card vh-card-tbd vh-st" key={it.name}>
                      <span className="vh-plus" aria-hidden="true">+</span>
                      <span className="vh-card-name">{it.name}</span>
                      <span className="vh-card-desc">{it.desc}</span>
                    </div>
                  ) : (
                    <div className="vh-card vh-st" key={it.name}>
                      <div className={`vh-card-logos${it.logos.length > 1 ? ' is-double' : ''}`}>
                        {it.logos.map((l) => (
                          <a href={l.url} {...ext} aria-label={`${l.name} website`} key={l.name}>
                            <img src={l.src} alt={l.name} />
                          </a>
                        ))}
                      </div>
                      <span className="vh-card-name">{it.name}</span>
                      <span className="vh-card-desc">{it.desc}</span>
                    </div>
                  ),
                )}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ (hidden after the event) */}
      {!isAfter && (
        <section id="faq" className="vh-wrap vh-section vh-faq">
          <div className="vh-faq-side">
            <div className="vh-label">FAQ</div>
            <h2>Frequently asked questions</h2>
            <p>More questions? <a href="mailto:vlc.hacks@cdtm.com">vlc.hacks@cdtm.com</a></p>
          </div>
          <div className="vh-faq-list">
            {FAQ.map(([q, a], i) => (
              <div className="vh-faq-item" key={q}>
                <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{q}</span>
                  <span className={`vh-faq-icon${openFaq === i ? ' is-open' : ''}`} aria-hidden="true">+</span>
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Organisers */}
      <section id="organisers" className="vh-dark">
        <div className="vh-wrap vh-section vh-org">
          <div className="vh-org-head">
            <div className="vh-label vh-lime">Organisers</div>
            <h2>CDTM Valencia</h2>
          </div>
          <img className="vh-org-img" src="/home/cdtm-room.jpg" alt="CDTM Valencia space" loading="lazy" />
          <div className="vh-org-text">
            <p>The CDTM Valencia Hackathon is organized by the Center for Digital Technology and Management (CDTM) in Valencia, a joint institution of excellence by Polytechnic University of Valencia (UPV) and Universitat de València (UV). CDTM is the place to educate, connect &amp; empower the innovators of tomorrow.</p>
            <p>CDTM alumni in Germany have founded 20% of all German unicorns, raised billions in venture capital, and lead cutting-edge research at institutions like MIT, DeepMind, and Stanford. All of this has been achieved with just 50 students joining each year. Now, CDTM Valencia marks the first expansion of this unique model to Spain and we are excited to bring its proven success to the heart of Valencia.</p>
            <a href="https://cdtm.com/valencia" {...ext} className="vh-link vh-link-light">Learn more about CDTM Valencia →</a>
          </div>
        </div>
      </section>

      {/* Closing block */}
      <section className="vh-close">
        <div className={`vh-ghost${isAfter ? ' is-long' : ''}`} aria-hidden="true">{isAfter ? 'THANK YOU' : isOpen ? 'JOIN US' : 'SEE YOU'}</div>
        <div className="vh-wrap vh-close-in">
          <div className="vh-close-text">
            <div className="vh-label">{isAfter ? 'VLC Hacks 2026' : isOpen ? 'Apply' : 'Applications closed'}</div>
            {isAfter ? (
              <h2>Thank you for<br />building with us</h2>
            ) : isOpen ? (
              <h2>Be part of<br />VLC Hacks 2026</h2>
            ) : (
              <h2>See you on<br />21 November</h2>
            )}
            <span>
              {isAfter
                ? 'Thank you to all participants, partners, mentors and jury who made VLC Hacks 2026 possible. Want to keep building with us? Discover the CDTM Valencia program.'
                : isOpen
                  ? 'Applications are open until 13 November 2026 at 23:59.'
                  : 'Applications for VLC Hacks 2026 are now closed. Thank you to everyone who applied. Want to keep building with us? Discover the CDTM Valencia program.'}
            </span>
          </div>
          {isOpen ? (
            <a className="vh-btn" href={APPLY_URL} {...ext}>Apply now →</a>
          ) : (
            <a className="vh-btn" href="https://cdtm.com/valencia" {...ext}>Discover CDTM Valencia →</a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="vh-footer">
        <div className="vh-wrap vh-footer-in">
          <div className="vh-footer-main">
            <strong>CDTM VALENCIA HACKS 2026</strong>
            <span>Contact · <a href="mailto:vlc.hacks@cdtm.com">vlc.hacks@cdtm.com</a></span>
            <small>© 2026 CDTM Valencia</small>
          </div>
          <div className="vh-footer-links">
            <a href="https://cdtm-valencia.notion.site/cdtm-hacks-2025-terms-conditions" {...ext}>Terms &amp; conditions</a>
            <a href="https://cdtm.com/privacy-policy" {...ext}>Privacy policy</a>
            <a href="https://cdtm.com/legal" {...ext}>Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
