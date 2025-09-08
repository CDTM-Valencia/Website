export interface Project {
  id: string;
  name: string;
  case: "Trade Republic" | "avi" | "beam";
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

export const cases: Record<"HP" | "NTT Data" | "IBM", Case> = {
  "HP": {
    name: "HP",
    // TODO: Use real case description
    description: "To Be Determined",
    sponsorUrl: "https://catedra-hp.webs.upv.es/",
    logo: "/images/partners/catedra_hp.png",
    logoClass: "max-h-[20px] max-w-[200px]",
  },
  "NTT Data": {
    name: "NTT Data",
    // TODO: Use real case description
    description: "To Be Determined",
    sponsorUrl: "https://www.nttdata.com/es/es",
    logo: "/images/partners/ntt_data.svg",
    logoClass: "max-h-[20px] max-w-[200px]",
  },
  "IBM": {
    name: "IBM",
    // TODO: Use real case description
    description: "To Be Determined",
    sponsorUrl: "",
    logo: "/images/partners/ibm.svg",
    logoClass: "max-h-[20px] max-w-[200px]",
  },
} as const;

export const challenges: Record<string, Challenge> = {
  mistral: {
    name: "Best Use of La Plateforme/ Mistral models",
    sponsoredBy: "Mistral AI",
    companies: [
      {
        name: "Mistral AI",
        url: "https://mistral.ai/",
        logoPath: "/images/partners/mistral-ai-2025.svg",
        logoClass: "max-h-[20px] max-w-[200px]",
      },
    ],
  },
  'beyond-presence': {
    name: "Best Use of Real-Time Interactive Avatars",
    sponsoredBy: "Beyond Presence",
    companies: [
      {
        name: "Beyond Presence",
        url: "https://www.beyondpresence.ai/",
        logoPath: "/images/partners/beyond_presence.svg",
        logoClass: "max-h-[20px] max-w-[200px]",
      },
    ]
  },
  visionaries: {
    name: "Most potential to earn real money",
    sponsoredBy: "Visionaries Club, Everyday Intelligence and paid.ai",
    companies: [
      {
        name: "Visionaries Club",
        url: "https://visionariesclub.com/",
        logoPath: "/images/partners/visionaries_club.svg",
        logoClass: "max-h-[20px] max-w-[200px]",
      },
      {
        name: "Everyday Intelligence",
        logoPath: "/images/partners/everyday_intelligence_logo.svg",
        logoClass: "max-h-[20px] max-w-[200px]",
      },
      {
        name: "paid.ai",
        url: "https://paid.ai/",
        logoPath: "/images/partners/paid_ai.svg",
        logoClass: "max-h-[20px] max-w-[200px]",
      },
    ],
  }
} as const;

export const projects: Project[] = [
  // Trade Republic Projects
  /*
  {
    id: "project-tr-1",
    name: "Placeholder",
    case: "Trade Republic",
    whatIsProject: "Placeholder",
    howBuilt: "Placeholder",
    difficulties: "Placeholder",
    oneSentencePitch: "Placeholder",
    githubUrl: "https://github.com/demo/placeholder",
    videoUrl: "https://youtube.com/watch?v=demo1",
    placement: 1,
    challenges: [challenges.visionaries],
  },
  */
  // NTT Data Projects
  

  // IBM Projects
  
];
