import { styled } from "styled-components";

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(10, 10, 26, 0.8);
  border-bottom: 1px solid var(--color-glass-border);
  transition: var(--transition);
`;

export const NavLogo = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: -0.5px;

  span {
    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-white);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const NavItem = styled.a<{ $active: boolean }>`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-light)"};
  transition: var(--transition);
  letter-spacing: 0.5px;

  &:hover {
    color: var(--color-primary);
  }
`;

export const NavCta = styled.a<{ $active?: boolean }>`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-white);
  background: ${({ $active }) =>
    $active ? "var(--color-primary-hover)" : "var(--color-primary)"};
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius-pill);
  transition: var(--transition);
  box-shadow: ${({ $active }) =>
    $active ? "0 0 12px rgba(124, 106, 255, 0.4)" : "none"};

  &:hover {
    background: var(--color-primary-hover);
    color: var(--color-white);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
