import { styled } from "styled-components";

export const AboutSection = styled.section``;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: 60%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const AboutImgContainer = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  padding: 0.5rem;
`;

export const AboutImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const AboutContent = styled.div`
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const AboutDeck = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
  }
`;

export const AboutCard = styled.article`
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: var(--color-glass-hover);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const CardHead = styled.h5`
  margin-top: 0.6rem;
  font-size: 0.85rem;
  font-weight: 500;
`;

export const CardSmall = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`;

export const AboutInfo = styled.div`
  color: var(--color-light);
  font-size: 0.9rem;
  line-height: 1.8;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;
