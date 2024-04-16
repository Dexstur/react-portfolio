import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 68vh;
  }

  @media (max-width: 600px) {
    height: 100vh;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 24rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  padding-top: 2rem;
`;

export const ScrollDown = styled.a`
  position: absolute;
  bottom: 5rem;
  right: -2.3rem;
  transform: rotate(90deg);
  font-weight: 200;
  font-size: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeaderCTA = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const HeaderSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
