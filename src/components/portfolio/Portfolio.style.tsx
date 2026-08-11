import { styled } from "styled-components";

export const PortfolioSection = styled.section``;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition);

  &:hover {
    background: var(--color-glass-hover);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const PortfolioImgContainer = styled.div`
  overflow: hidden;
  height: 200px;

  @media (max-width: 600px) {
    height: 160px;
  }
`;

export const PortfolioImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;

  ${PortfolioItem}:hover & {
    transform: scale(1.05);
  }
`;

export const PortfolioHead = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

export const PortfolioDescription = styled.p`
  font-size: 0.8rem;
  color: var(--color-light);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const PortfolioBody = styled.div`
  padding: 1.2rem 1.5rem;
`;

export const PortfolioCta = styled.div`
  display: flex;
  gap: 0.8rem;

  .btn {
    font-size: 0.75rem;
    padding: 0.5rem 1.2rem;
  }
`;
