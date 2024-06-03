import { styled } from "styled-components";

export const NavWrapper = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

export const NavItem = styled.a<{ active: Boolean }>`
  background: ${({ active }) =>
    active ? "var(--color-primary)" : "transparent"};
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  color: ${({ active }) => (active ? "var(--color-bg)" : "var(--color-light)")};
  font-size: 1.1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
