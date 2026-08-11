import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  min-height: 100vh;
  padding-top: 6rem;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1040 40%, #0d1f3c 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(124, 106, 255, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 0;
  }
`;

export const HeaderContent = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderLabel = styled.p`
  font-size: 0.75rem;
  color: var(--color-primary);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const HeaderName = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  span {
    color: var(--color-primary);
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-light);
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

export const HeaderDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-lighter);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 2rem;
`;

export const HeaderCTA = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: var(--color-light);
    font-size: 1.2rem;
    transition: var(--transition);

    &:hover {
      color: var(--color-primary);
      transform: translateY(-2px);
    }
  }
`;

export const Me = styled.div`
  flex: 0 0 320px;
  position: relative;

  @media (max-width: 1024px) {
    flex: 0 0 260px;
    width: 260px;
  }

  @media (max-width: 600px) {
    flex: 0 0 220px;
    width: 220px;
  }
`;

export const MeImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: linear-gradient(180deg, var(--color-primary) 0%, transparent 100%);
  border-radius: 160px 160px 30px 30px;
  padding: 1.5rem 1.5rem 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 140px 140px 20px 20px;
  }
`;

export const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-glass-border);
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
`;

export const StatLabel = styled.p`
  font-size: 0.75rem;
  color: var(--color-lighter);
  margin-top: 0.3rem;
`;

export const ScrollDown = styled.a``;
