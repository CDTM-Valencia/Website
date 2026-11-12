export interface Prize {
  name: string;
  description: string;
  sponsor?: string;
  sponsorLogo?: string;
  sponsorLogoClass?: string;
  sponsorLink?: string;
  sponsorLogos?: Array<{
    logo: string;
    link: string;
    name: string;
  }>;
  value?: string;
  image?: string;
}

export interface PrizeCategory {
  title: string;
  description?: string;
  prizes: Prize[];
}

export const GENERAL_PRIZES: PrizeCategory = {
  title: "General Prizes",
  description: "All participants receive these amazing prizes",
  prizes: [
    {
      name: "ElevenLabs Creator Plan ",
      description: "1 free month of ElevenLabs Creator Plan ($22/month per person)",
      sponsor: "ElevenLabs",
      sponsorLogo: "/images/partners/ElevenLabs_logo.png",
      image: "",
    },
    {
      name: "Lovable Credits",
      description: "Free credits for Lovable AI platform",
      sponsor: "Lovable",
      sponsorLogo: "/images/partners/lovable_logo.svg",
      image: "",
    },
    {
      name: "Notion Template",
      description: "Official Notion template and support",
      sponsor: "Notion",
      sponsorLogo: "/images/partners/notionlogo.png",
      sponsorLogoClass: "!h-10",
      image: "",
    },
    {
      name: "Event Pack",
      description: "Exclusive merchandising, complete catering (breakfast, lunch, and dinner/snacks), and Red Bull",
      sponsor: "",
      sponsorLogo: "",
      image: "",
    }
    /*,{
      name: "Personalized Top",
      description: "Custom CDTM Valencia Hacks 2025 T-Shirt with sponsor logos",
      sponsor: "NTT Data and HP",
      sponsorLogos: [
        {
          logo: "/images/partners/ntt_data.svg",
          link: "https://www.nttdata.com/",
          name: "NTT Data"
        },
        {
          logo: "/images/partners/catedra-hp.png",
          link: "https://catedra-hp.webs.upv.es/",
          name: "HP"
        }
      ],
      image: "/images/prizes/top.png",
    },
    {
      name: "Lovable Pro Access",
      description: "100 credits for one month + 50% student discount for following months",
      sponsor: "Lovable",
      sponsorLogo: "/images/partners/lovable_logo.svg",
      sponsorLink: "https://lovable.dev/",
      value: "€100+ value",
    },
    {
      name: "CDTM Valencia Tote Bag",
      description: "Exclusive branded tote bag to carry your memories",
      sponsor: "CDTM Valencia",
      sponsorLogo: "/icon.png",
      sponsorLink: "https://cdtm.com/",
      image: "/images/prizes/tottebag.png",
    }*/
  ],
};

export const CASH_PRIZES: PrizeCategory = {
  title: "Cash Prizes",
  description: "Rewards for the top 2 teams",
  prizes: [
    {
      name: "Best Use of ElevenLabs Challenge",
      description: "890 $ per person for the team that better integrates and takes profit of ElevenLabs technology in its solution.",
      sponsor: "ElevenLabs",
      sponsorLogo: "/images/partners/ElevenLabs_logo.png",
      image: "",
    },
    {
      name: "Best MVP Ideation & Conceptualisation Challenge",
      description: "The team that best ideates and evolves its MVP will visit Improven’s offices in January to see first-hand how a consultancy works with agile practices. On top of that, one of its members will join Improven’s next bootcamp (12 Feb–6 Mar), valued at around €2,060.",
      sponsor: "Improven",
      sponsorLogo: "/images/partners/logo_improven_black.jpg",
      image: "",
    }
    /*
    {
      name: "First Place",
      description: "€450 + 4 VDS Tickets",
      sponsor: "LeapingAI",
      sponsorLogo: "/images/partners/leapingai.svg",
      sponsorLink: "https://leapingai.com/",
    },
    {
      name: "Second Place",
      description: "4 VDS Tickets",
      sponsor: "CDTM Valencia",
      sponsorLogo: "/icon.png",
      sponsorLink: "https://cdtm.com/",
    },*/
  ],
};

export const CASE_WINNERS_SWEATERS: PrizeCategory = {
  title: "Case Winners",
  description: "Sweaters for all participants",
  prizes: [
    {
      name: "Finanz Premium Plan ",
      description: "1 full year of Premium per person to learn how to invest and manage your money (€84 of value per person / €420 per team of 5).",
      sponsor: "Finanz",
      sponsorLogo: "/images/partners/finanz_logo.png",
      image: "",
    },
    {
      name: "ElevenLabs Pro Plan",
      description: "3 free months per person ($297 of value per person / $1,485 per team of 5).",
      sponsor: "ElevenLabs",
      sponsorLogo: "/images/partners/ElevenLabs_logo.png",
      image: "",
    },
    {
      name: "SCIENTISTS360 Self-Leadership Training",
      description: "A full-day, in-person self-leadership training (8 hours) for every member of the winning team, led by Dr. Alba Gigante, founder of SCIENTISTS360.",
      sponsor: "Scientists360",
      sponsorLogo: "/images/partners/scientists360_2.svg",
      image: "",
    }
    /*
    {
      name: "Case Winners",
      description: "12 Sweaters",
      sponsor: "Event Sponsors",
      sponsorLogos: [
        {
          logo: "/images/partners/ntt_data.svg",
          link: "https://www.nttdata.com/",
          name: "NTT Data"
        },
        {
          logo: "/images/partners/catedra-hp.png",
          link: "https://catedra-hp.webs.upv.es/",
          name: "HP"
        }
      ],
      image: "/images/prizes/hoodie.png",
    },*/
  ],
};

export const CASE_WINNERS_BOTTLES: PrizeCategory = {
  title: "Case Winners",
  description: "Event bottles for all participants",
  prizes: [
    {
      name: "To be announced",
      description: "",
      sponsor: "",
      sponsorLogo: "",
      image: "",
    }
    /*
    {
      name: "Case Winners",
      description: "12 Event Bottles",
      sponsor: "Event Sponsors",
      sponsorLogos: [
        {
          logo: "/images/partners/ntt_data.svg",
          link: "https://www.nttdata.com/",
          name: "NTT Data"
        },
        {
          logo: "/images/partners/catedra-hp.png",
          link: "https://catedra-hp.webs.upv.es/",
          name: "HP"
        }
      ],
      image: "/images/prizes/bottle.png",
    },*/
  ],
};

export const IBM_SPECIFIC_CASE: PrizeCategory = {
  title: "IBM Specific Case",
  description: "Special IBM prizes",
  prizes: [
    {
      name: "IBM Special Prizes",
      description: "4 IBM Caps + 4 IBM Bottles",
      sponsor: "IBM",
      sponsorLogo: "/images/partners/ibm.svg",
      sponsorLink: "https://www.ibm.com/",
    },
  ],
};
