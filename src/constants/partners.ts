export interface Sponsor {
  name: string;
  image?: string;
  link?: string;
  class?: string;
}

export const MAIN_SPONSOR: Sponsor = {
  name: "To Be Determined",
  image: "",
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
    link: "https://www.nttdata.com/",
  },

  {
    name: "LeapingAI",
    image: "/images/partners/leapingai.svg",
    link: "https://leapingai.com/",
  }
  ,
  {
    name: "IBM",
    image: "/images/partners/ibm.svg",
    link: "https://www.ibm.com/",
  }
  
];

export const CHALLENGE_SPONSORS: Sponsor[] = [
  {
    name: "Scientists360",
    image: "/images/partners/scientists360_2.svg",
    link: "https://scientists360.com/",
  },
  {
    name: "To Be Determined",
    image: "",
    link: "",
  },
  {
    name: "To Be Determined",
    image: "",
    link: "",
  }
];

export const TECH_SPONSORS: Sponsor[] = [
  {
    name: "Lovable",
    image: "/images/partners/lovable_logo.svg",
    link: "https://lovable.dev/",
  },
  {
    name: "To Be Determined",
    image: "",
    link: "",
  },
  {
    name: "To Be Determined",
    image: "",
    link: "",
  }
  /*
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
    */
];

export const FOOD_SPONSORS: Sponsor[] = [
  {
    name: "To Be Determined",
    image: "",
    link: "",
  }
  
];

export const VENUE_SPONSORS: Sponsor = {
  name: "ETSINF UPV",
  image: "/images/partners/etsinf.svg",
  link: "https://www.etsinf.upv.es/",
};
