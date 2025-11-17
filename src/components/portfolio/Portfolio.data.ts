import moniePaddy from "/moniePaddy.png";
import warpspeed from "/warpspeed_base.png";
import loopfreight from "/loopfreight.png";

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
    title: "Loopfreight - Logistics platform",
    img: loopfreight,
    alt: "Loopfreight",
    github: "#",
    url: "https://useloopfreight.com/",
  },
  {
    title: "Monie Paddy-Demo Payment app",
    img: moniePaddy,
    alt: "Monie paddy",
    github: "https://github.com/Dexstur/monie-paddie",
    url: "https://monie-paddy.onrender.com/login",
  },
];
