import { styled } from "styled-components";

export const ServicesSection = styled.section``;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ServicesCard = styled.article`
  background: var(--color-bg-variant);
  border-radius: 0 0 2rem 2rem;
  border: 1px solid var(--color-primary);
  height: fit-content;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const ServiceTop = styled.div`
  background: var(--color-primary);
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
`;

export const ServiceHead = styled.h3`
  color: var(--color-bg);
  font-size: 1rem;
  text-align: center;
`;

export const ServiceList = styled.ul`
  padding: 2rem;
`;

export const ServiceListItem = styled.li`
  display: flex;
  gap: 4rem;
  margin-bottom: 0.8rem;
`;

export const ServiceListContent = styled.p`
  font-size: 0.9rem;
`;
