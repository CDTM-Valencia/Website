export interface Sponsor {
  name: string;
  image?: string;
  link?: string;
  class?: string;
}

export const MAIN_SPONSOR: Sponsor = {
  name: "To Be Determined",
  image: "/images/partners/",
  link: "",
};

export const CASE_SPONSORS: Sponsor[] = [
  {
    name: "HP",
    image: "/images/partners/catedra-hp.png",
    link: "https://catedra-hp.webs.upv.es/",
  },
  {
    name: "NTT Data",
    image: "/images/partners/ntt_data.svg",
    class: "max-w-[200px]",
    link: "https://www.nttdata.com/es/es",
  },
  {
    name: "Mercadona",
    image: "/images/partners/mercadona.svg",
    class: "max-h-[55px] max-w-[200px]",
    link: "https://www.mercadona.es/",
  },
];

export const CHALLENGE_SPONSORS: Sponsor[] = [
  
];

export const TECH_SPONSORS: Sponsor[] = [
  {
    name: "Lightspeed",
    image: "/images/partners/lightspeed.png",
    link: "https://lsvp.com/",
  },
  {
    name: "OpenAI",
    image: "/images/partners/OpenAI_Logo.svg",
    link: "https://openai.com/",
  },
  {
    name: "Lovable",
    image: "/images/partners/lovable_logo.svg",
    link: "https://lovable.dev/",
  },
  {
    name: "Langfuse",
    image: "/images/partners/langfuse_logo.svg",
    link: "https://langfuse.com/",
  },
  {
    name: "Make",
    image: "/images/partners/make.svg",
    link: "https://make.com/",
    class: "max-h-[30px]",
  }
];

export const FOOD_SPONSORS: Sponsor[] = [
  
];

export const VENUE_SPONSORS: Sponsor = {
  name: "ETSINF UPV",
  image: "/images/partners/etsinf.svg",
  link: "https://www.etsinf.upv.es/",
};
