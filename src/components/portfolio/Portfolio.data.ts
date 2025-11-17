import blog from "/decablog.png";
import moniePaddy from "/moniePaddy.png";
import warpspeed from "/warpspeed_base.png";

interface PortfolioDataItem {
  title: string;
  img: string;
  alt: string;
  github: string;
  url: string;
}

export const portfolioItems: PortfolioDataItem[] = [
  {
    title: "Warpspeed Financials",
    img: warpspeed,
    alt: "WarpSpeed",
    github: "#",
    url: "https://warpspeedng.com",
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
