import medbay from "/medbay.png";
import blog from "/decablog.png";
import moniePaddy from "/moniePaddy.png";

interface PortfolioDataItem {
  title: string;
  img: string;
  alt: string;
  github: string;
  url: string;
}

export const portfolioItems: PortfolioDataItem[] = [
  {
    title: "Hospital Report Model",
    img: medbay,
    alt: "medbay",
    github: "https://github.com/Dexstur/hospital-model-ejs",
    url: "https://hospital-report-system.onrender.com/",
  },
  {
    title: "Decablog - Developers blog",
    img: blog,
    alt: "Decablog",
    github: "https://github.com/Dexstur/decablog-frontend",
    url: "https://decablog16.onrender.com/",
  },
  {
    title: "Monie Paddy-Demo Payment app",
    img: moniePaddy,
    alt: "Monie paddy",
    github: "https://github.com/Dexstur/monie-paddie",
    url: "https://monie-paddy.onrender.com/login",
  },
];
