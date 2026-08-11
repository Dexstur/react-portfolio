import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioItem,
  PortfolioImgContainer,
  PortfolioImg,
  PortfolioHead,
  PortfolioDescription,
  PortfolioBody,
  PortfolioCta,
} from "./Portfolio.style";
import { portfolioItems } from "./Portfolio.data";

function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer className="container">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index}>
            <PortfolioImgContainer>
              <PortfolioImg src={item.img} alt={item.alt} />
            </PortfolioImgContainer>
            <PortfolioBody>
              <PortfolioHead>{item.title}</PortfolioHead>
              <PortfolioDescription>{item.description}</PortfolioDescription>
              <PortfolioCta>
                {item.github !== "#" && (
                  <a href={item.github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                {item.url !== "#" && (
                  <a href={item.url} className="btn btn-primary" target="_blank">
                    Visit
                  </a>
                )}
                {item.github === "#" && item.url === "#" && (
                  <span className="btn" style={{ cursor: "default", opacity: 0.5 }}>
                    Private
                  </span>
                )}
              </PortfolioCta>
            </PortfolioBody>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioSection>
  );
}

export default Portfolio;
