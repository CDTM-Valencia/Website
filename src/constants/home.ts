// Content for the 2026 homepage (src/pages/Home.tsx).
// To change a text, a date or a partner, edit this file only.

// Event day (Europe/Madrid). The countdown and the "after the event" version use these dates.
export const EVENT_DAY = '2026-11-21T00:00:00+01:00';
// Application form (Formbricks)
export const APPLY_URL = 'https://app.formbricks.com/s/qk8u5z1nfe7p1o2tte47be4x';
export const AFTER_EVENT_FROM = '2026-11-22T00:00:00+01:00';
// The Guidebook button appears in the menu from this moment until the end of the event day
export const GUIDEBOOK_FROM = '2026-11-17T00:00:00+01:00';

export type Logo = { name: string; src: string; url: string; ratio: number };

export const LOGOS: Record<string, Logo> = {
  sherpas: { name: 'Sherpas', src: '/home/logos/sherpas.png', url: 'https://www.sherpaswealth.com', ratio: 4.07 },
  ntt: { name: 'NTT DATA', src: '/home/logos/ntt.png', url: 'https://www.nttdata.com', ratio: 4.88 },
  maisa: { name: 'Maisa', src: '/home/logos/maisa.png', url: 'https://maisa.ai', ratio: 3.39 },
  ideas: { name: 'IDEAS UPV', src: '/home/logos/ideas.png', url: 'https://www.upv.es/entidades/ideas/', ratio: 0.85 },
  eleven: { name: 'ElevenLabs', src: '/home/logos/eleven.png', url: 'https://elevenlabs.io', ratio: 7.73 },
  improven: { name: 'Improven', src: '/home/logos/improven.png', url: 'https://improven.com', ratio: 6.4 },
  notion: { name: 'Notion', src: '/home/logos/notion.png', url: 'https://www.notion.so', ratio: 2.86 },
  lovable: { name: 'Lovable', src: '/home/logos/lovable.png', url: 'https://lovable.dev', ratio: 5 },
  redbull: { name: 'Red Bull', src: '/home/logos/redbull.png', url: 'https://www.redbull.com', ratio: 1.64 },
  mercadona: { name: 'Mercadona IT', src: '/home/logos/mercadona.png', url: 'https://info.mercadona.es', ratio: 10 },
  hp: { name: 'Cátedra HP', src: '/home/logos/hp.png', url: 'https://catedra-hp.webs.upv.es', ratio: 2.6 },
  finanz: { name: 'Finanz', src: '/home/logos/finanz.png', url: 'https://finanzapp.io', ratio: 1 },
  sci: { name: 'Scientists360', src: '/home/logos/sci.png', url: 'https://scientists360.com/', ratio: 10.2 },
  terminal: { name: 'The Terminal Hub', src: '/home/logos/terminal.png', url: 'https://www.theterminalhub.com', ratio: 3.2 },
};

export const MAIN_SPONSORS = [LOGOS.sherpas, LOGOS.ntt, LOGOS.maisa, LOGOS.ideas];

export const OTHER_SPONSORS = [
  { tier: 'Challenge sponsors', logos: [LOGOS.eleven, LOGOS.improven] },
  { tier: 'Tech sponsors', logos: [LOGOS.notion, LOGOS.lovable] },
  { tier: 'Event sponsors', logos: [LOGOS.redbull, LOGOS.mercadona, LOGOS.hp, LOGOS.finanz, LOGOS.sci] },
  { tier: 'Venue sponsor', logos: [LOGOS.terminal] },
];

export const STATS = [
  { value: '60 Participants.', label: 'Bringing together the brightest minds to collaborate and innovate.' },
  { value: '10h Building.', label: 'An intensive day of hacking, learning, and building innovative solutions together.' },
  { value: 'Exciting Cases.', label: 'Tackle real-world challenges provided by industry leaders and create impactful solutions.' },
  { value: '> 7.000 € in Prizes.', label: 'Win incredible rewards, gain industry recognition, and open doors to new opportunities.' },
];

export const TESTIMONIALS = [
  {
    quote: 'What a great, inspiring energy! Very glad to have been part of the jury and congrats to all the participants.',
    name: 'Ferran Pla Cardona',
    role: 'Chief of Staff at Maisa · Jury, VLC Hacks 2025',
    url: 'https://www.linkedin.com/in/fplacardona/',
  },
  {
    quote: 'What I value most wasn’t the technical solution, but the opportunity to collaborate with such brilliant and passionate people.',
    name: 'Tudor Duca',
    role: 'Participant · Winner of the IBM case, VLC Hacks 2025',
    url: 'https://www.linkedin.com/in/petre-tudor-duca/',
  },
];

export const AGENDA = [
  { time: '08:30', title: 'Kick-off & case briefing', text: 'Welcome at The Terminal Hub and presentation of the company cases.' },
  { time: '10:00', title: 'Hacking time', text: 'Hacking time, mentorship rounds and Red Bull activation.' },
  { time: '13:30', title: 'Lunch break', text: 'Working lunch (30’).', muted: true },
  { time: '14:00', title: 'Working time', text: 'Final push to get the prototype and pitch ready.' },
  { time: '17:00', title: 'Presentations & awards', text: 'Pitches to the jury and awards ceremony, until 19:00.' },
];

export const JUDGES = [
  { name: 'Juan Fuentes Fernández', role: 'Co-Chair, EBAN Sports | Expert Evaluator, European Institute of Innovation & Technology (EIT)', photo: '/images/speaker/juan_fuentes.jpg', linkedin: 'https://www.linkedin.com/in/juanfuentesfernandez/' },
  { name: 'Iñigo de la Iglesia Santamaría', role: 'Investment Manager of Mission | Now, with Mission Fund I, we invest in extraordinary people who are building global technological solutions', photo: '/images/speaker/inigo_iglesia.jpg', linkedin: 'https://www.linkedin.com/in/-inigo/' },
  { name: 'Alejandro Vignoni', role: 'Entrepreneurship Area Director of IDEAS UPV | Entrepreneurship Ecosystem Director of STARTUPV', photo: '/images/speaker/alejo_vigno.jpg', linkedin: 'https://www.linkedin.com/in/alejovigno/' },
  { name: 'Ana Moya Correcher', role: 'AI & Operations Lead at BuhoAI | Operations & IT Lead at Bioemprender', photo: '/images/speaker/ana_moya.jpg', linkedin: 'https://www.linkedin.com/in/anamoyac/' },
  { name: 'Julián Fernández Calvo', role: 'Founder Buho AI | Your next coworker is already digital', photo: '/images/speaker/julian_fer.jpg', linkedin: 'https://www.linkedin.com/in/julianfernandez-iaenmurcia/' },
];

export type Prize = {
  name: string;
  desc: string;
  logos: Logo[];
  // 'before' = only until 21 Nov, 'after' = only from 22 Nov, undefined = always
  show?: 'before' | 'after';
  placeholder?: boolean;
};

export const PRIZE_GROUPS: { n: string; group: string; cols: 2 | 4; items: Prize[] }[] = [
  {
    n: '01',
    group: 'Case prizes',
    cols: 4,
    items: [
      { name: 'Finanz Premium Plan', desc: '1 full year of Premium per person to learn how to invest and manage your money (€84 of value per person / €420 per team of 5).', logos: [LOGOS.finanz] },
      { name: 'ElevenLabs Pro Plan', desc: '3 free months per person ($297 of value per person / $1,485 per team of 5).', logos: [LOGOS.eleven] },
      { name: 'SCIENTISTS360 Self-Leadership Training', desc: 'A full-day, in-person self-leadership training (8 hours) for every member of the winning team, led by Dr. Alba Gigante, founder of SCIENTISTS360.', logos: [LOGOS.sci] },
      { name: 'More prizes to be announced', desc: 'Stay tuned.', logos: [], show: 'before', placeholder: true },
      { name: 'Amazon Gift Card', desc: 'A €100 Amazon gift card for every member of the winning teams of the NTT DATA and Sherpas cases (€500 per team of 5).', logos: [LOGOS.ntt, LOGOS.sherpas], show: 'after' },
    ],
  },
  {
    n: '02',
    group: 'Challenge prizes',
    cols: 2,
    items: [
      { name: 'Best Use of ElevenLabs Challenge', desc: 'The team with the best project built with ElevenLabs wins 3 months of the ElevenLabs Scale plan for each team member ($897 of value per person, 1.8M credits per month).', logos: [LOGOS.eleven] },
      { name: 'Best MVP Ideation & Conceptualisation Challenge', desc: 'The team that best ideates and evolves its MVP will visit Improven’s offices in January to see first-hand how a consultancy works with agile practices. On top of that, one of its members will join Improven’s next bootcamp (12 Feb–6 Mar), valued at around €2,060.', logos: [LOGOS.improven] },
    ],
  },
  {
    n: '03',
    group: 'For every participant',
    cols: 4,
    items: [
      { name: 'ElevenLabs Creator Plan', desc: '1 free month of ElevenLabs Creator Plan ($22/month per person).', logos: [LOGOS.eleven] },
      { name: 'Lovable Credits', desc: 'Free credits for Lovable AI platform.', logos: [LOGOS.lovable] },
      { name: 'Notion Template & Workshop', desc: 'Official Notion template and support, plus a Notion workshop during the event.', logos: [LOGOS.notion] },
      { name: 'Event\nPack', desc: 'Exclusive merchandising, complete catering (breakfast, lunch, and snacks), and Red Bull.', logos: [LOGOS.redbull] },
    ],
  },
];

export const FAQ = [
  ['What is CDTM Valencia Hacks?', 'CDTM Valencia Hacks is an intensive one-day hackathon, celebrated on 21st November (8:30 AM – 7:00 PM), where students come together to build innovative solutions. It’s an opportunity to learn, connect, and turn ideas into reality while competing for exciting prizes.'],
  ['Who can participate?', 'Students from all universities and disciplines are welcome to participate. Whether you’re a programmer, designer, or business student, there’s a place for you at CDTM Valencia Hacks!'],
  ['Do I need to know how to code?', 'Not necessarily, but it can be very helpful to know how to code! We still welcome participants with diverse skill sets. Teams benefit from having members with different backgrounds, including business development, design, and project management.'],
  ['How much does it cost?', 'CDTM Valencia Hacks is completely free for all accepted participants. We provide meals, snacks, and beverages throughout the event, as well as a comfortable building space and mentorship.'],
  ['How do teams work?', 'Teams consist of 5 members. Staff will make sure teams are interdisciplinary. However, you can submit your preferred teammates and we will do our best to include them.'],
  ['What should I bring?', 'Bring your laptop, charger, and any other devices you might need. We’ll provide the rest!'],
  ['Will there be food and drinks?', 'Absolutely! We provide a catering service for 80 people at the event.'],
  ['What kind of support is available during the hackathon?', 'We provide technical mentors, workshops, and access to various APIs and tools like Notion, Lovable and ElevenLabs. Our experienced mentors from industry partners will be available to help you with technical challenges and project development.'],
  ['How do I register for the hackathon?', 'You can register for the hackathon by filling out the registration form. You have until 23:59 on 13th November to register.'],
  ['Do I have to work on a case or learn before the hackathon?', 'No, you don’t have to prepare anything for the hackathon. You will have time during the hackathon to build your project. However, once selected, we will share resources to help you make the most out of it.'],
  ['What criteria do you use to select participants?', 'We will select participants based on their education, experience level and previous projects. We will also start sending confirmations before the application deadline, so early applicants have higher chances of getting accepted.'],
  ['What if I don’t have a team?', 'You will be matched with a team at the hackathon.'],
  ['What is the acceptance rate?', 'The acceptance rate is around 33%, since we accept 60 people and more than 180 have applied.'],
  ['How can I apply to CDTM Valencia course recognised by UV & UPV?', 'In order to be notified when applications open for the free CDTM Valencia course, you can subscribe to our newsletter after the hackathon is over.'],
];
