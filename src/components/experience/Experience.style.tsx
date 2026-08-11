import { styled } from "styled-components";

export const ExperienceSection = styled.section``;

export const ExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ExpCard = styled.div`
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  transition: var(--transition);

  &:hover {
    background: var(--color-glass-hover);
    border-color: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const ExpCardHead = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: var(--color-primary);
`;

export const ExpContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const ExpSkill = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(124, 106, 255, 0.1);
  border: 1px solid rgba(124, 106, 255, 0.2);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  font-weight: 400;

  &:hover {
    background: rgba(124, 106, 255, 0.2);
    border-color: rgba(124, 106, 255, 0.35);
  }
`;

export const ExpSkillHead = styled.span``;
export const ExpSkillSmall = styled.span``;
