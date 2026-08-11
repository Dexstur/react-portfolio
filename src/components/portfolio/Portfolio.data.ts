import warpspeed from "/warpspeed_base.png";
import loopfreight from "/loopfreight.png";
import lpfTracking from "/lpf-tracking.png";
import ahaVaccination from "/aha-vaccination.png";

interface PortfolioDataItem {
  title: string;
  description: string;
  img: string;
  alt: string;
  github: string;
  url: string;
}

export const portfolioItems: PortfolioDataItem[] = [
  {
    title: "Warpspeed Financials",
    description:
      "Production fintech platform with dashboards, RBAC, transaction workflows and real-time collaboration features.",
    img: warpspeed,
    alt: "Warpspeed Financials",
    github: "#",
    url: "https://warpspeedng.com",
  },
  {
    title: "AHA Vaccination Campaign",
    description:
      "Full-stack vaccination campaign management with offline sync, analytics dashboards and interactive Leaflet maps.",
    img: ahaVaccination,
    alt: "AHA Vaccination Campaign",
    github: "#",
    url: "https://ahadataroom.com",
  },
  {
    title: "Loopfreight Logistics",
    description:
      "End-to-end logistics platform with driver rewards, webhook management and role-based admin controls.",
    img: loopfreight,
    alt: "Loopfreight",
    github: "#",
    url: "https://useloopfreight.com/",
  },
  {
    title: "Fleet Management & Tracking",
    description:
      "Live GPS tracking with geo-fencing, remote operations, dual payment flows and Google Maps integration.",
    img: lpfTracking,
    alt: "Loopfreight Tracking",
    github: "#",
    url: "https://track.useloopfreight.com",
  },
];
