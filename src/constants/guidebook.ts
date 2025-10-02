import {
  Info,
  Star,
  MapPin,
  MessageSquare,
  Menu,
  CheckSquare,
  Truck,
  Award,
  Pill,
  Calendar,
  Map,
  Users,
  Wrench,
  Upload,
  Phone,
  MessageCircle,
  Utensils,
  Building,
  LucideIcon,
  Wifi,
  Plane,
} from "lucide-react";

// Define icon names as strings instead of JSX elements
export type IconName =
  | "info"
  | "star"
  | "mapPin"
  | "messageSquare"
  | "menu"
  | "checkSquare"
  | "truck"
  | "award"
  | "pill"
  | "calendar"
  | "map"
  | "users"
  | "wrench"
  | "upload"
  | "phone"
  | "messageCircle"
  | "utensils"
  | "building"
  | "wifi"
  | "plane";

// Map of icon names to their components
export const iconMap: Record<IconName, LucideIcon> = {
  info: Info,
  star: Star,
  mapPin: MapPin,
  messageSquare: MessageSquare,
  menu: Menu,
  checkSquare: CheckSquare,
  truck: Truck,
  award: Award,
  pill: Pill,
  calendar: Calendar,
  map: Map,
  users: Users,
  wrench: Wrench,
  upload: Upload,
  phone: Phone,
  messageCircle: MessageCircle,
  utensils: Utensils,
  building: Building,
  wifi: Wifi,
  plane: Plane,
};

export interface GuidebookSubsection {
  id: string;
  title: string;
  icon: IconName;
  content: string;
}

export interface GuidebookSection {
  id: string;
  title: string;
  icon: IconName;
  subsections: GuidebookSubsection[];
}

export const GUIDEBOOK_DATA: GuidebookSection[] = [
  {
    id: "general",
    title: "General Information",
    icon: "info",
    subsections: [
      {
        id: "checklist",
        title: "Participant Checklist",
        icon: "checkSquare",
        content: `<h3 class="text-xl font-bold mb-1">🤝 Must Haves:</h3>
• Valid ID / Passports
• Laptop and charger
• Water bottle
• Comfortable clothes
• Good Vibes :)

<h3 class="text-xl font-bold mb-1">💡 What You Should Know:</h3>
• <strong>No coding experience required!</strong> We welcome participants with diverse skill sets including business development, design, and project management
• <strong>Teams of 4 members</strong> work best - You will receive details on where to meet your teammates before the event begins, and we will also share their contact information so you can get in touch.
• <strong>Completely free event</strong> - we provide meals, snacks, beverages, and all necessary facilities
• <strong>Technical mentors available</strong> to help with Challenges and project development

<h3 class="text-xl font-bold mb-1">🎯 What to Expect:</h3>
• 6 hours of intensive building and innovation
• Access to various APIs and tools
• Workshops and technical support
• Networking with industry partners
• Exciting prizes and recognition opportunities
• Free catering throughout the event`,
      },
      {
        id: "accreditation",
        title: "Accreditation Process",
        icon: "award",
        content: `<h3 class="text-xl font-bold mb-1">How to get your participant badge and complete registration:</h3>
1. Please go to the hall of ETSINF UPV (Building 1G).
2. Show your ID.
3. After the verification, you will be able to enter the room with your team.
4. You will also get a goodie bag.
5. And you're ready to start building. Enjoy CDTM Valencia Hacks 2025 🎉
`,
      },
      {
        id: "venue",
        title: "Venue Details and Map",
        icon: "mapPin",
        content: `
<h3 class="text-xl font-bold mb-1">Event Venue - ETSINF UPV:</h3>
Universitat Politècnica de València<br />
Escola Tècnica Superior d'Enginyeria Informàtica<br />
Valencia, Spain<br /><br />
<iframe src="https://www.google.com/maps?q=ETSINF+UPV+Valencia&output=embed" width="100%" height="300" style="border:0; border-radius: 8px; margin-top: 12px; margin-bottom: 12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
• The doors open on 2nd October at 14:30 (2:30 PM).
• Please make sure to arrive no later than 14:30 (2:30 PM) so we can kick things off smoothly together.

<p class="mt-4 mb-4">❗Please note that this is a 6-hour intensive hackathon event, so make sure to arrive on time!</p>

<h3 class="text-xl font-bold mb-1">Event Schedule:</h3>
• <strong>14:30 - 15:00:</strong> Registration & Welcome
• <strong>15:00 - 15:15:</strong> Opening Ceremony & Case Presentations
• <strong>15:15 - 20:00:</strong> Building Time (4 hours 45 minutes)
• <strong>20:00 - 21:00:</strong> Final Presentations & Awards

`,
      },
      {
        id: "firstaid",
        title: "First Aid & Safety",
        icon: "pill",
        content: `
Our team (everyone wearing "CDTM Valencia" merch) is there for you and will help you in every situation. For any questions or any non-critical emergency, feel free to approach any crew member.

If you need (medical) help, reach out to our team or call the emergency number 112. In case of an emergency, please follow their instructions!

<b class="text-xl font-bold mb-0">What to do when you call 112?</b>

Make the call yourself if you can
→ Call from a safe place
→ Explain what happened
→ Tell them your exact address: ETSINF UPV, Valencia, Spain
→ Answer all the emergency operator's questions
→ Follow the instructions given
→ Don't end the call until permitted.

<b class="text-xl font-bold mb-0">Safety & wellbeing</b>

If you face any situation that makes you feel unsafe or uncomfortable in the hackathon environment, please reach out to the team.

<b class="text-xl font-bold mb-0">Venue Security</b>

The ETSINF UPV campus has 24/7 security. In case of any security concerns, contact our team immediately or approach campus security directly.
`,
      },
      {
        id: "wifi",
        title: "Internet Access",
        icon: "wifi",
        content: `To join our WiFi network, please connect to "UPV-Guest" and follow the instructions. The password will be provided at registration. For any connectivity issues, contact our technical support team.`,
      },
      {
        id: "schedule-overview",
        title: "Schedule Overview",
        icon: "calendar",
        content: `
        <h3 class="text-xl font-bold mb-2">📅 CDTM Valencia Hacks 2025 Schedule</h3>
        
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <strong>2nd October 2025 - 6 Hours of Innovation</strong>
        </div>
        
        <table class="min-w-full text-left border border-gray-200 mb-4">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-4 py-2 border-b">Time</th>
              <th class="px-4 py-2 border-b">Activity</th>
              <th class="px-4 py-2 border-b">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">14:30 - 15:00</td>
              <td class="px-4 py-2 border-b">Registration & Welcome</td>
              <td class="px-4 py-2 border-b">Main Hall</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">15:00 - 15:30</td>
              <td class="px-4 py-2 border-b">Opening Ceremony & Case Presentations</td>
              <td class="px-4 py-2 border-b">Room 1.07</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">15:30 - 20:30</td>
              <td class="px-4 py-2 border-b">Hacking Time (5 hours)</td>
              <td class="px-4 py-2 border-b">Room 1.07</td>
            </tr>
              <td class="px-4 py-2 border-b">20:30 - 21:00</td>
              <td class="px-4 py-2 border-b">Final Presentations & Awards</td>
              <td class="px-4 py-2 border-b">Room 1.07</td>
            </tr>
          </tbody>
        </table>
        
        <p class="mt-2"><strong>Note:</strong> This is an intensive 6-hour event. Make sure to arrive on time and stay focused!</p>`,
      },
      {
        id: "channels",
        title: "Communication Channels",
        icon: "messageSquare",
        content: `Simple communication for the event:

        <b class="text-xl font-bold mb-0">Social Media</b>
        Follow us and use hashtag <b class="text-springBlue">#cdtmvalenciahacks2025</b>:
        • Instagram: <a class="underline text-springBlue" href='https://www.instagram.com/cdtm_vlc'>@centerlings</a>
        • LinkedIn: <a class="underline text-springBlue" href='https://www.linkedin.com/company/cdtm-valencia/'>@cdtm_valencia</a>
        • Discord: <a class = "underline text-springBlue" href = "https://discord.com/invite/dC8YAhNV"> CDTM VLC Hacks </a>

        <b class="text-xl font-bold mb-0">Questions?</b>
        Ask our team members (wearing "CDTM Valencia" shirts)

        `,
      },
      {
        id: "food",
        title: "Food & Drinks",
        icon: "utensils",
        content: `We provide free food and drinks throughout the 6-hour event:

        <strong>🍽️ What's Included:</strong>
        • Snacks and light refreshments
        • Coffee, tea, and soft drinks
        • Water stations
        • Energy bars and healthy options

        <strong>💡 Simple Tips:</strong>
        • Stay hydrated - drink water regularly
        • Take breaks to eat and recharge
        • All food and drinks are free for participants

        <p class="mt-2"><strong>Note:</strong> Focus on building your solution - we'll take care of the rest!</p>
          `,
      },
      {
        id: "prizes",
        title: "Prizes & Recognition",
        icon: "award",
        content: `<h3 class="text-xl font-bold mb-2">🏆 What You Can Win</h3>
        
        <strong>Main Prizes:</strong>
        For the first two best projects no matter the case, you will be able to win the following prizes:
        • <strong>1st Place:</strong> €450 + Recognition
        • <strong>2nd Place:</strong> 5 VDS Tickets + Recognition  
        
        <strong>Winner Prizes:</strong>
        The best case projects will be able to win the following prizes:
        • <strong>Case Winners:</strong> 12 Sweaters + 12 Bottles
        • <strong>IBM Special Prizes:</strong> 4 IBM caps + 4 IBM bottles 

        <strong>Challenge Prizes:</strong>
        • <strong> Free </strong> access to <strong> Scientists360 </strong> program
        
        <strong>General Prizes:</strong>
        • <strong>Personalized Top:</strong> Custom CDTM VLC Hacks 2025 T-shirt 
        • <strong>Lovable Pro Access:</strong> 100 credits for one month + 50% student discount
        • <strong>CDTM Valencia Tote Bag:</strong> Exclusive bag to carry yor memories
        • <strong> 20% </strong> discount on <strong> Scientists360</strong> program  
        
        <h3 class="text-xl font-bold mb-2">🎯 How to Win</h3>
        • Build innovative solutions to real-world challenges
        • Work effectively as a team
        • Present your project clearly and convincingly
        • Demonstrate technical excellence and creativity
        • Show potential for real-world impact
        
        <h3 class="text-xl font-bold mb-2">💡 Pro Tips for Success</h3>
        • Prepare before the hackathon
        • Focus on solving a real problem
        • Leverage the resources available (mentors, tools, etc.)
        • Make your solution user-friendly
        • Prepare a clear and compelling presentation
        • Work on the project submission
        • Document your work well

        
        <p class="mt-2"><strong>Note:</strong> All participants receive certificates and networking opportunities with industry partners!</p>`,
      },
      {
        id: "feedback",
        title: "Feedback",
        icon: "messageCircle",
        content: `We are always looking for ways to improve the event. If you have any immediate feedback during the event, please just talk to us or reach out to us. We will try to help you as soon as possible.
          
          After the event, we will also ask you to fill out a feedback form to help us improve the event.`,
      },
    ],
  },
  {
    id: "challenges",
    title: "Cases & Challenges",
    icon: "star",
    subsections: [
      {
        id: "cases-vs-challenges",
        title: "Cases vs. Challenges",
        icon: "star",
        content: `There are <strong>three separate cases</strong> (Leaping AI, IBM, NTT Data) to choose from. Every team will work on <strong>exactly one case!</strong> All teams will opt to win the challenge by answering one question in the project submission form.
        `,
      },
      {
        id: "pref-submission",
        title: "Case Preference",
        icon: "checkSquare",
        content: `The preference selection is done <strong>before the Hackathon starts</strong>.
        The team leader will decide the ranking of the cases and submit your preferences <strong>before 30/10/2025 00:00</strong>`,
      },
      {
        id: "final-submission",
        title: "Final Submission",
        icon: "upload",
        content: `The deadline is <strong>20:00 on 2nd October</strong> - hard cut-off - no exceptions.

<h3 class="text-xl font-bold">Your submission should include:</h3>
• <strong>Your Team ID</strong> (we email you this after the case assignment)
• <strong>Your Team Name:</strong> What should we call your team? This name will be used in announcements and on our showcase page.
• <strong>Your Project Name:</strong> What should we call your project? This name will be used in announcements and on our showcase page.
• <strong>Demo video:</strong> Upload a short demo video (maximum 1 minute) to YouTube and share the public or unlisted link here. Make sure the video is accessible without login so judges can view it easily.
• <strong>Link to Your Demo or MVP (optional, but recommended):</strong> If available, please provide a URL where judges can view or test your solution. While optional, including a demo significantly improves the evaluation experience and increases your chances of standing out.
• <strong>Link to GitHub Repository (optional, but recommended):</strong> Please provide the URL to your public GitHub repository. Providing a GitHub repository is optional, but highly recommended. If you don't have one, just click Next to continue.
We strongly recommend providing GitHub and MVP links since they will be showcased on our website.

<h3 class="text-xl font-bold">Written project description covering:</h3>
• <strong>One-Sentence pitch:</strong> Summarize your project in a single, compelling sentence.
• <strong>What Is Your Project? (max 800 characters):</strong> Describe your project in a few clear, informative sentences (max. 800 characters). Focus on what it does, who it's for, and what makes it unique.
• <strong>How Did You Build It? (max 800 characters):</strong> Briefly describe your tech stack and the key technologies used to build your project. Highlight tools, frameworks, APIs, or models that played a major role.
• <strong>Difficulties You Faced (max 500 characters):</strong> Briefly describe the main technical or non-technical difficulties you encountered during the project. What was hard, unexpected, or required creative problem-solving?

        <h3 class="text-xl font-bold">💥 Scientists 360 Challenge - Leadership Under Pressure:</h3>
        • <strong>Leadership Reflection (max 500 characters):</strong> What leadership dynamics emerged within your team during the hackathon, and how did they help (or hinder) your ability to move forward under pressure? (You may refer to role distribution, communication, decision-making, or how you handled critical moments.)

        <h3 class="text-xl font-bold">🛡️ S2 Grupo Challenge - Cybersecurity:</h3>
        • <strong>Cybersecurity Implementation (max 500 characters):</strong> How does your project address key cybersecurity principles to ensure responsible, safe, and trustworthy use of technology? Describe which cybersecurity measures you implemented (at least 2 out of the 4 pillars) and how you demonstrated them.

        <h3 class="text-xl font-bold">Additional information:</h3>
• You can submit as many times as you want. We will use your latest submission.

<h3 class="text-xl font-bold">Just a reminder: Prepare for Your Final 3 minutes Presentation!</h3>
<p class="mb-2">Please note that after 20:00, the case partners will review and select the best 3 for their case. If your project places there, you will get the chance to deliver a live pitch in front of the independent jury and the audience. The independent jury for the main prize will not review your written submission and will evaluate your performance solely based on your live pitch.</p>
<p class="mb-4">You don't need to submit anything in advance for the final presentation; however we will provide a template to help you prepare for it.</p>

<h3 class="text-xl font-bold">Submit your project here:</h3>
<p>➡️ <a class="underline text-springBlue" href='https://vlc.hacks.cdtm.com/submission' target="_blank" rel="noopener noreferrer">https://vlc.hacks.cdtm.com/submission</a></p>
`,
     
      },
      {
        id: "descriptions",
        title: "Case Descriptions",
        icon: "info",
        content: `Here are the 3 exciting cases for CDTM Valencia Hacks 2025 - check out the links for up-to-date information: 

<strong>Case 1: Leaping AI </strong>

<i>Introduction:</i> Voice AI agents are the hot topic of 2025! They can be used for anything from customer service to sales enablement to ops. Dive into the world of voice AI agents by leveraging Lovable + the beginner-friendly tools + APIs of Leaping AI – an innovative voice AI agent platform company based out of San Francisco. Amaze the world by building a killer voice AI agent! </i>

<i>Focus Areas:</i> AI, Software, Voice agents
<a class="underline text-springBlue" href ="https://www.loom.com/share/8b4efc0e5153482bb6920f5fdadeeeac?sid=37a841f7-07d4-4f18-9cdd-02707509f014" target="_blank"> Video Explanation from the CEO </a>

<strong>Case 2: IBM</strong>

<i>Introduction:</i> Agentic AI is changing the way enterprises work. At IBM, our consultants and clients face daily challenges: preparing for meetings, finding the right knowledge, managing repetitive tasks, and making smarter business decisions. Your mission is to design a prototype of a Agentic AI system that boosts productivity in a real business scenario.

<i>Focus Areas:</i> AI, Agents, Software

<strong>Case 3: NTT Data </strong>

<i>Introduction:</i> AI-powered assistant for document extraction and analysis. An AI agent that analyzes request for proposal (RFP) documents, extracts key requirements, and generates structured proposal drafts to save time and improve response quality.

<i>Focus Areas:</i> AI, Agents, Software

<strong>How to Participate:</strong>
• Choose your preferred case during registration
• Work on your solution during the 6-hour hackathon
• Present your project to the judges
• Win prizes and recognition!

<i>Note:</i> Detailed case briefs will be provided after team case assignment confirmation on Wednesday 1st October.
        `,
      },
      {
        id: "challenge-descriptions",
        title: "Challenge Descriptions",
        icon: "info",
        content: `<h3 class="text-xl font-bold mb-2">Challenge Sponsors & Prizes</h3>
<table class="min-w-full text-left border border-gray-200 mb-4">
  <thead>
    <tr>
      <th class="px-4 py-2 border-b">Partner</th>
      <th class="px-4 py-2 border-b">Challenge Description</th>
      <th class="px-4 py-2 border-b">Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="px-4 py-2 border-b">Scientists360</td>
      <td class="px-4 py-2 border-b">Leadership Under Pressure</td>
      <td class="px-4 py-2 border-b">Free access to their program</td>
    </tr>
    <tr>
      <td class="px-4 py-2 border-b">S2 Grupo</td>
      <td class="px-4 py-2 border-b">Cybersecurity Challenge</td>
      <td class="px-4 py-2 border-b">4 120€ amazon vouchers</td>
    </tr>
  </tbody>
</table>

<h3 class="text-xl font-bold mb-2">💥 SCIENTISTS 360 Challenge 💥</h3>
        <h4 class="text-lg font-bold mb-2">"Leadership Under Pressure"</h4>
        <p class="mb-2"><strong>Preparing future leaders for high-stakes innovation environments</strong></p>
        
        <p class="mb-2">In the real world, great ideas aren't enough, it's how you lead and collaborate under pressure that determines success.</p>
        <p class="mb-2">This challenge by Scientists 360 experts in STEM talent development goes beyond the code or the final pitch. We want to see how you lead, coordinate, and transform as a team during 6 intense hours of innovation.</p>
        <p class="mb-2">Throughout the hackathon, we'll be looking at your ability to demonstrate self-leadership, effective communication, and conflict resolution because teams that can navigate pressure can solve any challenge.</p>

        <h3 class="text-xl font-bold mb-2">📝 Reflection Question</h3>
        <div class="bg-yellow-50 p-3 rounded-lg mb-2 border-l-4 border-yellow-400">
        <p class="font-semibold">What leadership dynamics emerged within your team during the hackathon, and how did they help (or hinder) your ability to move forward under pressure?</p>
        </div>

        <h3 class="text-xl font-bold mb-2">📊 Grading Criteria</h3>
        <table class="min-w-full text-left border border-gray-200 mb-4">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-4 py-2 border-b">Criteria</th>
              <th class="px-4 py-2 border-b">Weight</th>
              <th class="px-4 py-2 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">Self-awareness</td>
              <td class="px-4 py-2 border-b">25%</td>
              <td class="px-4 py-2 border-b">Understanding your own leadership style and impact</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Team dynamics</td>
              <td class="px-4 py-2 border-b">25%</td>
              <td class="px-4 py-2 border-b">How roles and communication evolved under pressure</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Decision-making</td>
              <td class="px-4 py-2 border-b">25%</td>
              <td class="px-4 py-2 border-b">How critical decisions were made during challenges</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Growth mindset</td>
              <td class="px-4 py-2 border-b">25%</td>
              <td class="px-4 py-2 border-b">Learning from setbacks and adapting leadership approach</td>
            </tr>
          </tbody>
        </table>

        <h3 class="text-xl font-bold mb-2">💡 Tips for Success</h3>
        <ul class="list-disc list-inside mb-2 ml-4">
          <li>Be specific about moments when leadership emerged or shifted</li>
          <li>Reflect on both successes and challenges your team faced</li>
          <li>Consider how different team members stepped up during pressure</li>
          <li>Think about what you learned about yourself as a leader</li>
          <li>Be honest about what worked and what didn't</li>
        </ul>

        <h3 class="text-xl font-bold mb-2">🛡️ S2 GRUPO Challenge</h3>
        <h4 class="text-lg font-bold mb-2">"Cybersecurity Challenge"</h4>
        <p class="mb-2"><strong>Ensuring responsible, safe, and trustworthy use of technology</strong></p>
        
        <p class="mb-2">Cybersecurity is essential in today's digital landscape. This challenge focuses on implementing key cybersecurity principles in your project to ensure responsible, safe, and trustworthy use of technology.</p>

        <h3 class="text-xl font-bold mb-2">🔍 Challenge Question</h3>
        <div class="bg-yellow-50 p-3 rounded-lg mb-2 border-l-4 border-yellow-400">
        <p class="font-semibold">How does your project address key cybersecurity principles to ensure responsible, safe, and trustworthy use of technology?</p>
        </div>

        <h3 class="text-xl font-bold mb-2">📋 Guidance for Participants</h3>
        <p class="mb-2">Describe which cybersecurity measures you implemented (at least 2 out of the 4 pillars below) and how you demonstrated them in your prototype or the platform you use implements them. You may choose any combination, but we encourage starting with Identity & Access Management (IAM) plus one additional area.</p>

        <h3 class="text-xl font-bold mb-2">🏗️ The 4 Cybersecurity Pillars</h3>
        
        <div class="mb-3">
        <h4 class="font-bold text-lg mb-1">🔑 1) Identity & Access Management (IAM)</h4>
        <p class="mb-1">Ensure only authorized users/services access sensitive features.</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Techniques/examples:</strong></p>
        <ul class="list-disc list-inside ml-4 text-sm">
          <li>Basic login/authentication (email + OTP or token)</li>
          <li>Role-based access control (e.g., admin/user/guest)</li>
          <li>Temporary tokens or session expiration</li>
        </ul>
        </div>

        <div class="mb-3">
        <h4 class="font-bold text-lg mb-1">🔒 2) Protection of Sensitive Data</h4>
        <p class="mb-1">Prevent leakage of Personally Identifiable Information (PII) or critical data.</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Techniques/examples:</strong></p>
        <ul class="list-disc list-inside ml-4 text-sm">
          <li>Regex/heuristic PII detection</li>
          <li>Label text as "Confidential"</li>
          <li>Mock encryption or anonymization in storage or exports</li>
        </ul>
        </div>

        <div class="mb-3">
        <h4 class="font-bold text-lg mb-1">📝 3) Auditability, Traceability & Explainability</h4>
        <p class="mb-1">Record who did what, and make AI/system actions understandable.</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Techniques/examples:</strong></p>
        <ul class="list-disc list-inside ml-4 text-sm">
          <li>Immutable logs (user, action, timestamp)</li>
          <li>Simple audit trail viewer</li>
          <li>Short explanation of why the system/AI suggested an action</li>
        </ul>
        </div>

        <div class="mb-3">
        <h4 class="font-bold text-lg mb-1">🚨 4) Abuse Detection & Mitigation</h4>
        <p class="mb-1">Detect and neutralize malicious or unintended use.</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Techniques/examples:</strong></p>
        <ul class="list-disc list-inside ml-4 text-sm">
          <li>Input filters for prompt injection/exfiltration attempts</li>
          <li>Reject unsafe requests with clear error messages</li>
          <li>Alert the user/UI in case of suspicious behavior</li>
        </ul>
        </div>

        <h3 class="text-xl font-bold mb-2">📊 Evaluation Criteria</h3>
        <table class="min-w-full text-left border border-gray-200 mb-4">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-4 py-2 border-b">Criteria</th>
              <th class="px-4 py-2 border-b">Weight</th>
              <th class="px-4 py-2 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">Impact on security</td>
              <td class="px-4 py-2 border-b">30%</td>
              <td class="px-4 py-2 border-b">How effectively does it mitigate real risks?</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Integration</td>
              <td class="px-4 py-2 border-b">25%</td>
              <td class="px-4 py-2 border-b">Is security embedded without breaking UX/UI?</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Traceability & explainability</td>
              <td class="px-4 py-2 border-b">20%</td>
              <td class="px-4 py-2 border-b">Can actions be audited and explained?</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Innovation & scalability</td>
              <td class="px-4 py-2 border-b">15%</td>
              <td class="px-4 py-2 border-b">Can your approach grow in a real-world setting?</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Clarity of demo/pitch</td>
              <td class="px-4 py-2 border-b">10%</td>
              <td class="px-4 py-2 border-b">Do you clearly present risks and mitigations?</td>
            </tr>
          </tbody>
        </table>
`,
      },
      {
        id: "networking",
        title: "Networking & Career Opportunities",
        icon: "users",
        content: `<strong class="text-xl font-bold mb-2">🤝 Connect with Industry Leaders!</strong>

<p class="mb-2">CDTM Valencia Hacks 2025 is your gateway to the Valencia tech ecosystem and beyond. Here's what you can expect:</p>

<h3 class="text-xl font-bold mb-2">🎯 Networking Opportunities</h3>
<ul class="list-disc list-inside mb-2 ml-4">
  <li>Meet representatives from Valencia's top tech companies</li>
  <li>Connect with UPV faculty and researchers</li>
  <li>Network with fellow students and entrepreneurs</li>
  <li>Get insights from industry mentors and judges</li>
</ul>
<h3 class="text-xl font-bold mb-2">💼 Career Development</h3>
<ul class="list-disc list-inside mb-2 ml-4">
  <li>Internship opportunities with partner companies</li>
  <li>Mentorship programs with industry professionals</li>
  <li>Access to Valencia's startup ecosystem</li>
  <li>Potential collaboration opportunities</li>
</ul>
<h3 class="text-xl font-bold mb-2">🏆 Recognition & Portfolio</h3>
<ul class="list-disc list-inside mb-2 ml-4">
  <li>Certificates for all participants</li>
  <li>Portfolio-worthy project experience</li>
  <li>Industry recognition for winners</li>
  <li>Social media highlights and features</li>
</ul>

<p class="mt-2"><strong>Pro Tip:</strong> Bring business cards or prepare your LinkedIn profile - networking starts from day one!</p>`,
      },
      {
        id: "tools",
        title: "Available Tools & Resources",
        icon: "wrench",
        content: `<h3 class="text-xl font-bold ">Tech Resources & Tools</h3>
We provide access to various tools and resources to help you build amazing solutions during the hackathon.

<h3 class="text-xl font-bold mb-2">🛠️ Development Tools</h3>
<table class="min-w-full text-left border border-gray-200">
  <thead>
    <tr>
      <th class="px-4 py-2 border-b">Tool</th>
      <th class="px-4 py-2 border-b">Access</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="px-4 py-2 border-b">Lovable</td>
      <td class="px-4 py-2 border-b">100 credits</td>
    </tr>
  </tbody>
</table>

<h3 class="text-xl font-bold mb-2">📚 Learning Resources</h3>
• <strong>Mentorship:</strong> Industry experts available for guidance
• <strong>Workshops:</strong> Technical sessions throughout the event
• <strong>Documentation:</strong> Comprehensive guides and tutorials

<h3 class="text-xl font-bold mb-2">💡 Pro Tips</h3>
• Start with simple solutions and iterate
• Use APIs and existing tools to save time
• Focus on user experience and functionality
• Test your solution with real users
• Document your process and decisions

<p class="mt-2"><strong>Note:</strong> All tools and resources are provided free of charge for participants!</p>`,
      },
    ],
  },
  {
    id: "cdtm",
    title: "CDTM & Valencia",
    icon: "building",
    subsections: [
      {
        id: "about",
        title: "About CDTM",
        icon: "building",
        content: `The Center for Digital Technology and Management (CDTM) is a joint entrepreneurship-focused program by the Technical University of Munich and Ludwig-Maximilians-Universität, with a community of 1,000+ students and alumni who have founded 20% of German unicorns, raised 11% of Germany's VC funding ($1.2B in 2022), and lead research at MIT, Google DeepMind, and Stanford.

<h3 class="text-xl font-bold mb-2">🌍 CDTM Goes Global</h3>
CDTM Valencia Hacks 2025 represents our commitment to fostering innovation beyond Munich. We're bringing our expertise in entrepreneurship and technology to Valencia, collaborating with UPV to create a unique hackathon experience.

<h3 class="text-xl font-bold mb-2">🎓 About UPV Partnership</h3>
The Universitat Politècnica de València (UPV) is one of Spain's leading technical universities, known for its excellence in engineering, computer science, and innovation. This partnership combines CDTM's entrepreneurial spirit with UPV's technical expertise.

<h3 class="text-xl font-bold mb-2">💡 Learn More</h3>
• Visit our <a class="underline text-springBlue" href='https://www.cdtm.com/'>website</a> to learn about CDTM
• Explore UPV's <a class="underline text-springBlue" href='https://www.upv.es/'>programs</a> and research
• Connect with CDTM students and alumni at the event
• Ask about opportunities for international collaboration

<p class="mt-2"><strong>Pro Tip:</strong> Look for CDTM students wearing our merchandise - they're here to help and share their experiences!</p>`,
      },
      {
        id: "local",
        title: "Local Transportation",
        icon: "truck",
        content: `
        The ETSINF UPV is located in Valencia, Spain. Here are the best ways to reach the venue:

        Just use Google Maps to find the best way to get to the venue: <iframe src="https://www.google.com/maps?q=ETSINF+UPV+Valencia&output=embed" width="100%" height="300" style="border:0; border-radius: 8px; margin-top: 12px; margin-bottom: 12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <h3 class="text-lg font-bold">Public Transportation:</h3>
        <strong>Metro:</strong> Line 3 or 5 to Universitat Politècnica station → 5 min walk
        <strong>Bus:</strong> Multiple bus lines serve the Universitat Politècnica area - check local transit apps for specific routes
        <strong>From Valencia Airport:</strong> Take Metro Line 3 or 5 directly to Universitat Politècnica
        <strong>From Valencia Central Station:</strong> Take Metro Line 3 or 5 to Universitat Politècnica
        
        <h3 class="text-lg font-bold">Parking:</h3>
        Limited parking available on campus. We recommend using public transportation.
        `,
      },
    ],
  },
];
