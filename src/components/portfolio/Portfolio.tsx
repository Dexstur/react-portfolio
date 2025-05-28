import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioItem,
  PortfolioImgContainer,
  PortfolioHead,
  PortfolioImg,
  PortfolioCta,
} from "./Portfolio.style";
import { portfolioItems } from "./Portfolio.data";

function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer className="container">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index}>
            <PortfolioImgContainer>
              <PortfolioImg src={item.img} alt={item.alt} />
            </PortfolioImgContainer>
            <PortfolioHead>{item.title}</PortfolioHead>
            <PortfolioCta>
              <a href={item.github} className="btn" target="_blank">
                {item.github === "#" ? "Private" : "Github"}
              </a>
              <a href={item.url} className="btn btn-primary" target="_blank">
                Visit
              </a>
            </PortfolioCta>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioSection>
  );
}

export default Portfolio;
