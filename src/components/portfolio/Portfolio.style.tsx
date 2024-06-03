import { styled } from "styled-components";

export const PortfolioSection = styled.section``;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
`;

export const PortfolioImgContainer = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const PortfolioImg = styled.img``;

export const PortfolioHead = styled.h3`
  margin: 1.2rem 0 2rem;
`;

export const PortfolioCta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
