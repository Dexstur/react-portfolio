import { styled } from "styled-components";

export const ServicesSection = styled.section``;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ServicesCard = styled.article`
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

export const ServiceTop = styled.div`
  margin-bottom: 1.5rem;
`;

export const ServiceHead = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-white);
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ServiceListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  .service__icon {
    color: var(--color-primary);
    margin-top: 3px;
    flex-shrink: 0;
    font-size: 1rem;
  }
`;

export const ServiceListContent = styled.p`
  font-size: 0.85rem;
  color: var(--color-light);
  line-height: 1.6;
`;
