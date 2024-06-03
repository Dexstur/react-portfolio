import { styled } from "styled-components";

export const ExperienceSection = styled.section``;

export const ExpContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const ExpFrontend = styled.div``;

export const ExpCard = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

export const ExpCardHead = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

export const ExpContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

export const ExpSkill = styled.article`
  display: flex;
  gap: 1rem;
`;

export const ExpSkillHead = styled.h4``;

export const ExpSkillSmall = styled.small``;
