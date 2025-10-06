export interface Project {
  id: string;
  name: string;
  case: "Leaping AI" | "IBM" | "NTT Data";
  whatIsProject: string;
  howBuilt: string;
  difficulties: string;
  oneSentencePitch: string;
  githubUrl?: string;
  videoUrl: string;
  demoUrl?: string;
  placement?: 1 | 2;
  overallPlacement?: 1 | 2 | 3;
  challenges?: Array<Challenge>;
}

export type Company = {
  name: string;
  url?: string;
  logoPath: string;
  logoClass: string;
};

export type Challenge = {
  name: string;
  sponsoredBy: string;
  companies: Company[];
};

export interface Case {
  name: string;
  description: string;
  sponsorUrl: string;
  logo: string;
  logoClass: string;
}

export const cases: Record<"Leaping AI" | "IBM" | "NTT Data", Case> = {
  "Leaping AI": {
    name: "Leaping AI",
    description: "Voice AI agents are the hot topic of 2025! They can be used for anything from customer service to sales enablement to ops. Dive into the world of voice AI agents by leveraging Lovable + the beginner-friendly tools + APIs of Leaping AI – an innovative voice AI agent platform company based out of San Francisco. Amaze the world by building a killer voice AI agent!",
    sponsorUrl: "https://leapingai.com",
    logo: "/images/partners/leapingai.svg",
    logoClass: "h-8 sm:h-10 w-auto",
  },
  "IBM": {
    name: "IBM",
    description: "Agentic AI is changing the way enterprises work. At IBM, our consultants and clients face daily challenges: preparing for meetings, finding the right knowledge, managing repetitive tasks, and making smarter business decisions. Your mission is to design a prototype of a Agentic AI system that boosts productivity in a real business scenario.",
    sponsorUrl: "https://ibm.com",
    logo: "/images/partners/ibm.svg",
    logoClass: "h-8 sm:h-10 w-auto",
  },
  "NTT Data": {
    name: "NTT Data",
    description: "AI-powered assistant for document extraction and analysis. An AI agent that analyzes request for proposal (RFP) documents, extracts key requirements, and generates structured proposal drafts to save time and improve response quality.",
    sponsorUrl: "https://nttdata.com",
    logo: "/images/partners/ntt_data.svg",
    logoClass: "h-8 sm:h-10 w-auto",
  },
} as const;

export const challenges: Record<string, Challenge> = {
  scientists360: {
    name: "Leadership Under Pressure",
    sponsoredBy: "Scientists 360",
    companies: [
      {
        name: "Scientists 360",
        url: "https://scientists360.com",
        logoPath: "/images/partners/scientists360_2.svg",
        logoClass: "h-8 sm:h-10 w-auto",
      },
    ],
  },
  s2grupo: {
    name: "Cybersecurity Challenge",
    sponsoredBy: "S2 Grupo",
    companies: [
      {
        name: "S2 Grupo",
        url: "https://s2grupo.com",
        logoPath: "/images/partners/s2grupo.svg",
        logoClass: "h-8 sm:h-10 w-auto",
      },
    ],
  }
} as const;

export const projects: Project[] = [
  // IBM Projects
  {
    id: "project-1",
    name: "Data Boys",
    case: "IBM",
    whatIsProject: "We built an automated pre-meeting intelligence platform that transforms calendar events into tailored briefings for enterprise sales agents.",
    howBuilt: "Built with Node.js/Express, MongoDB, React 18, Material-UI 3, and Google Calendar API integration.",
    difficulties: "Time management and parallel development challenges.",
    oneSentencePitch: "ClientVision is a web app that automatically generates concise, actionable client briefing reports.",
    githubUrl: "https://github.com/javierferrersb/cdtm-hackathon",
    videoUrl: "https://www.youtube.com/watch?v=NSThZbX8T1g",
    demoUrl: "https://www.youtube.com/watch?v=NSThZbX8T1g",
    challenges: []
  },
  {
    id: "project-4",
    name: "Cognition Crew",
    case: "IBM",
    whatIsProject: "An AI assistant 'Watty' that organizes schedules, summarizes meetings, and analyzes financial reports.",
    howBuilt: "Built with Lovable, React, Tailwind CSS, and integrated with IBM Granite 4.0 model.",
    difficulties: "Language barriers and learning new tools under time constraints.",
    oneSentencePitch: "Agentic AI which optimizes your time, summarizes your reunions and identifies the needs of your clients.",
    githubUrl: "https://github.com/pablocopete/IBM",
    videoUrl: "https://youtu.be/uXMS-RVz_FA",
    demoUrl: "https://preview--daily-edge-agent.lovable.app/intelligent",
    challenges: []
  },
  {
    id: "project-5",
    name: "Val-ÍA",
    case: "IBM",
    whatIsProject: "The PitchLink AI bridges the gap between client pitches and sales/tech teams by analyzing meeting transcripts.",
    howBuilt: "Built with Lovable, React.js, Tailwind CSS, and Supabase for backend services.",
    difficulties: "Finding a solvable problem within time constraints while staying viable for all companies.",
    oneSentencePitch: "Instead of relying on memory, messy notes, or endless clarification messages, the tool captures key information from client pitches.",
    githubUrl: "https://github.com/Lunkynono/forge-ui-suite",
    videoUrl: "https://youtu.be/_V0Bdy74LCE",
    demoUrl: "https://forge-ui-suite.lovable.app",
    challenges: []
  },
  {
    id: "project-10",
    name: "Bytelencia CF",
    case: "IBM",
    whatIsProject: "IBMail analyzer is an AI-driven assistant designed for sales professionals at IBM, helping them manage their inbox efficiently.",
    howBuilt: "Built with Lovable, React, Tailwind CSS, and IBM Granite Instruct for AI processing.",
    difficulties: "Balancing AI accuracy with concise outputs and designing secure confidentiality handling.",
    oneSentencePitch: "An AI email assistant that transforms cluttered inboxes into clear priorities, empowering IBM sales teams to act faster and smarter.",
    githubUrl: "https://github.com/vdlbm/inteligent-sales-copilot",
    videoUrl: "https://youtu.be/5fbOz2qFTdc",
    demoUrl: "https://inteligent-sales-copilot.lovable.app/login",
    challenges: []
  },
  {
    id: "project-12",
    name: "DeepVibes",
    case: "IBM",
    whatIsProject: "Watsonx.sales is a unified sales enablement platform designed to supercharge IBM's pre-sales consultants by automating the entire sales cycle.",
    howBuilt: "Built with Lovable, Next.js, TypeScript, Shadcn UI, and IBM's Granite 3.2 model.",
    difficulties: "Understanding IBM salesperson workflow and architecting a cohesive platform for the entire pre-sales cycle.",
    oneSentencePitch: "Watsonx.sales is an all-in-one AI co-pilot that automates the entire sales cycle for IBM consultants.",
    githubUrl: "https://github.com/anboch/watsonx-guide",
    videoUrl: "https://youtu.be/8G_AYw2D6Vk",
    demoUrl: "https://watsonxales-briefing-booster.lovable.app",
    challenges: [],
    placement: 1
  },

  // NTT Data Projects
  {
    id: "project-2",
    name: "Sigma Data Leads",
    case: "NTT Data",
    whatIsProject: "An AI-powered RFP analysis and validation platform designed specifically for NTT DATA consultants.",
    howBuilt: "Built with Lovable for rapid deployment and Python with Ollama framework for LLM processing.",
    difficulties: "Aligning diverse ideas and integrating LLM components within the backend.",
    oneSentencePitch: "Our platform solves RFP complexity by leveraging cascaded LLMs that accurately extract key information.",
    githubUrl: "https://github.com/gandpablo/proposal-analyzer-ai",
    videoUrl: "https://www.youtube.com/watch?v=I6Ej3eN3FLk",
    demoUrl: "https://lovable.dev/projects/c38ef3bc-1c98-4731-af27-94980fb9eee3?magic_link=mc_3accadea-f851-473a-83dd-5bfc5ba5a7cc",
    challenges: []
  },
  {
    id: "project-6",
    name: "Data sharks",
    case: "NTT Data",
    whatIsProject: "AmpelRFP is a full-stack web application designed for consulting firms and integrators that need to respond to complex tenders.",
    howBuilt: "Built with ChatGPT and Lovable Cloud & AI, using real-time collaboration features.",
    difficulties: "Learning Lovable on the fly and adapting workflow for sample RFPs instead of real file uploads.",
    oneSentencePitch: "AmpelRFP is an AI-powered assistant that analyzes RFPs, drafts tailored responses, and gives a traffic-light compliance check.",
    githubUrl: "https://github.com/pablozarzomontes6-ctrl/bid-weaver-07.git",
    videoUrl: "https://youtu.be/_1oum_4tiwg",
    demoUrl: "http://bid-weaver-07.lovable.app/auth",
    challenges: [challenges.scientists360],
    placement: 1
  },
  {
    id: "project-7",
    name: "HacKrew",
    case: "NTT Data",
    whatIsProject: "An intelligent RFP assistant that revolutionizes how NTT DATA manages and responds to business proposals.",
    howBuilt: "Built with Lovable as the main development tool for rapid prototyping and deployment.",
    difficulties: "Adapting complex technical feasibility evaluation logic to Lovable's platform limitations.",
    oneSentencePitch: "An intelligent platform that uses AI to analyze business proposals, evaluate their technical feasibility, and generate personalized professional responses for NTT DATA.",
    githubUrl: "https://github.com/JulioGallego1/ai-rfp-stream",
    videoUrl: "https://youtu.be/Iny9OKQLyNw?si=iHaEGt-kaBvtNQUR",
    demoUrl: "https://ai-rfp-stream.lovable.app/",
    challenges: []
  },
  {
    id: "project-13",
    name: "Zwiebäcker",
    case: "NTT Data",
    whatIsProject: "Un asistente de RFP impulsado por IA que ayuda a consultoras y empresas de TI a responder propuestas de manera más ágil y precisa.",
    howBuilt: "Desarrollado en Lovable con React/Next.js, TypeScript, Tailwind, PostgreSQL, y pgvector para embeddings.",
    difficulties: "Generar prompts adecuados para que la IA entienda realmente la funcionalidad deseada.",
    oneSentencePitch: "Un asistente de IA que automatiza el análisis, redacción y validación de RFPs, reduciendo errores y acelerando el tiempo de respuesta.",
    githubUrl: "https://github.com/davidoof3141/vlc-cdtm-hackathon.git",
    videoUrl: "https://youtu.be/RdW7pvYOUVs",
    demoUrl: "https://rfp-genius-92.lovable.app",
    placement: 1
  },
  {
    id: "project-15",
    name: "Meeples",
    case: "NTT Data",
    whatIsProject: "Our idea is to create a service where customers can generate AI-based voice agents with organic and fluid results.",
    howBuilt: "Connected Lovable website to Leaping AI API with automatic agent generation from text prompts.",
    difficulties: "Leaping AI platform issues with saving and importing agents, requiring refined prompts and methodical processes.",
    oneSentencePitch: "Virtual Voice Agent generator service implementing Lovable and LeapingAI.",
    githubUrl: "https://github.com/Polaitet/call-artisan.git",
    videoUrl: "https://youtu.be/hjohDxDohLA",
    demoUrl: "https://github.com/Polaitet/call-artisan.git",
    challenges: []
  },

  // Leaping AI Projects
  {
    id: "project-3",
    name: "QuadraCore",
    case: "Leaping AI",
    whatIsProject: "A 24/7 AI chatbot specialized in moral support and motivation, with a service for clinics working with psychologists.",
    howBuilt: "Built with Lovable, React, Supabase, and Leaping AI API for dialog system integration.",
    difficulties: "Integrating database into Lovable and learning curve with Leaping AI within the 4-hour sprint.",
    oneSentencePitch: "Our project provides a 24/7 AI chatbot specialized in moral support and motivation for a user, but also has a service for clinics working with psychologists to reduce their load",
    githubUrl: "https://github.com/JaumeBQ/mind-stream-aid.git",
    videoUrl: "https://youtu.be/_PPwAtZ_fBw",
    demoUrl: "http://mind-stream-aid.lovable.app",
    challenges: [challenges.s2grupo]
  },
  {
    id: "project-8",
    name: "Franciscanos",
    case: "Leaping AI",
    whatIsProject: "TalentEcho bridges the gap in job applications by offering intelligent pre-screening, helping HR detect inconsistencies in CVs.",
    howBuilt: "Built frontend with Lovable, backend workflows with n8n, and integrated Leaping AI for real-time voice interactions.",
    difficulties: "Ensuring smooth, low-latency voice interactions and integrating three platforms into a cohesive system.",
    oneSentencePitch: "I voice agent that uncovers true potential, screening candidates beyond resumes in minutes.",
    githubUrl: "https://github.com/MariaBolumar/leap-form-ai.git",
    videoUrl: "https://youtube.com/@mariabolumargarcia8885?si=z4YwyR84AgmgV0Pk",
    demoUrl: "https://leap-form-ai.lovable.app/",
    challenges: []
  },
  {
    id: "project-9",
    name: "HAKQ",
    case: "Leaping AI",
    whatIsProject: "The AI-Powered RFP Assistant automates the proposal process end-to-end with analysis, drafting, and compliance tracking.",
    howBuilt: "Rapidly prototyped with Lovable, designed for React, Tailwind, Vite, FastAPI, and Supabase in production.",
    difficulties: "Defining company needs and balancing functional prototype vs mockup under tight time constraints.",
    oneSentencePitch: "Transform complex RFPs into instant insights and winning AI-drafted proposals.",
    githubUrl: "https://github.com/davidoof3141/vlc-cdtm-hackathon.git",
    videoUrl: "https://www.youtube.com/channel/UCHPeYFxpsQz68C8xPNXNX8g",
    demoUrl: "https://preview--vlc-cdtm-hackathon.lovable.app/",
    challenges: []
  },
  {
    id: "project-11",
    name: "Mala Hierba Services",
    case: "Leaping AI",
    whatIsProject: "A Virtual Waiter voice agent that makes restaurant interactions effortless and inclusive for all customers.",
    howBuilt: "Built customer-facing voice agent with Leaping AI and restaurant dashboard with Lovable AI, connected via Google Sheets.",
    difficulties: "Synchronization issues in Leaping AI and limited time to design and integrate both customer agent and owner app.",
    oneSentencePitch: "A voice-powered virtual waiter that provides restaurant information, takes orders, and handles reservations.",
    githubUrl: "https://github.com/QiangXu1564/order-reserve-aid.git",
    videoUrl: "https://youtube.com/shorts/Q8f1EJYMJ6g?si=7iOmn5rNr8ZRj943",
    demoUrl: "https://order-reserve-aid.lovable.app",
    challenges: []
  },
  {
    id: "project-14",
    name: "BRAF",
    case: "Leaping AI",
    whatIsProject: "VoiceBite is a voice-guided restaurant booking platform that makes the reservation process simple and accessible for everyone.",
    howBuilt: "Developed using Leaping AI platform with Aircall telephony API integration and simulated restaurant database.",
    difficulties: "Designing natural conversational flow and technical difficulties with voice latency and external API integration.",
    oneSentencePitch: "VoiceBite is a voice app that enables blind people and anyone who struggles with websites to book restaurants in a simple and accessible way.",
    githubUrl: "https://voicebite.lovable.app/",
    videoUrl: "https://youtu.be/qXqsJnVi4FE",
    demoUrl: "https://voicebite.lovable.app/",
    challenges: []
  }
];
