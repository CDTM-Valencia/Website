interface Speaker {
  name: string;
  title: string;
  company: string;
  cdtmClass: string;
  image: string;
  linkedin: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "Ferran Pla Cardona",
    title: "Co-Founder CDTM Valencia",
    company: "Antai Ventures",
    cdtmClass: "Class of Spring 2016",
    image: "/images/speaker/ferran_pla.jpeg",
    linkedin: "https://www.linkedin.com/in/fplacardona/?originalSubdomain=es",
  },
  {
    name: "Adrián Villanueva",
    title: "Center Assistant CDTM Valencia",
    company: "CDTM Valencia",
    cdtmClass: "",
    image: "/images/speaker/adrian_villanueva.jpeg",
    linkedin: "https://www.linkedin.com/in/adri%C3%A1n-villanueva-mart%C3%ADnez/",
  }
];
