export interface Prize {
  name: string;
  description: string;
  sponsor?: string;
  sponsorLogo?: string;
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
      name: "Personalized Top",
      description: "Custom CDTM Valencia Hacks 2025 t-shirt with sponsor logos",
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
    },
  ],
};

export const CASH_PRIZES: PrizeCategory = {
  title: "Cash Prizes",
  description: "Rewards for the top 2 teams",
  prizes: [
    {
      name: "First Place",
      description: "€450 Cash Prize",
      sponsor: "LeapingAI",
      sponsorLogo: "/images/partners/leapingai.svg",
      sponsorLink: "https://leapingai.com/",
    },
    {
      name: "Second Place",
      description: "5 VDS Tickets",
      sponsor: "CDTM Valencia",
      sponsorLogo: "/icon.png",
      sponsorLink: "https://cdtm.com/",
    },
  ],
};

export const CASE_WINNERS_SWEATERS: PrizeCategory = {
  title: "Case Winners",
  description: "Sweaters for all participants",
  prizes: [
    {
      name: "Case Winners",
      description: "15 Sweaters",
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
    },
  ],
};

export const CASE_WINNERS_BOTTLES: PrizeCategory = {
  title: "Case Winners",
  description: "Event bottles for all participants",
  prizes: [
    {
      name: "Case Winners",
      description: "15 Event Bottles",
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
    },
  ],
};

export const IBM_SPECIFIC_CASE: PrizeCategory = {
  title: "IBM Specific Case",
  description: "Special IBM prizes",
  prizes: [
    {
      name: "IBM Special Prizes",
      description: "5 IBM Caps + 5 IBM Bottles",
      sponsor: "IBM",
      sponsorLogo: "/images/partners/ibm.svg",
      sponsorLink: "https://www.ibm.com/",
    },
  ],
};
