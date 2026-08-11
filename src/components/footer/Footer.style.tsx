import { styled } from "styled-components";

export const FooterSection = styled.footer`
  padding: 3rem 0 2rem;
  text-align: center;
  border-top: 1px solid var(--color-glass-border);
`;

export const FooterLogo = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 1.5rem;
  display: inline-block;
  letter-spacing: -0.5px;

  span {
    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-white);
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 auto 2rem;
`;

export const FooterListItem = styled.li`
  a {
    font-size: 0.8rem;
    color: var(--color-light);

    &:hover {
      color: var(--color-primary);
    }
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    color: var(--color-light);
    font-size: 1.1rem;
    transition: var(--transition);

    &:hover {
      color: var(--color-primary);
      transform: translateY(-2px);
    }
  }
`;

export const FooterRights = styled.div`
  color: var(--color-lighter);
`;

export const FooterSmall = styled.small`
  font-size: 0.75rem;
`;
