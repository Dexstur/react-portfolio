import { styled } from "styled-components";

export const AboutSection = styled.section``;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem auto;
  }

  @media (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

export const AboutImgContainer = styled.div`
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0deg);
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AboutContent = styled.div`
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const AboutDeck = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
`;

export const CardHead = styled.h5`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export const CardSmall = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`;

export const AboutInfo = styled.div`
  color: var(--color-light);
  padding: 2rem 0;

  @media (max-width: 1024px) {
    padding: 1rem 0 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }
`;
