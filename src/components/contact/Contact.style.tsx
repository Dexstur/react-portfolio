import { styled } from "styled-components";

export const ContactSection = styled.section``;

export const ContactContainer = styled.div`
  width: 58%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
`;

export const ContactType = styled.h4``;

export const ContactAddress = styled.h5``;

export const ContactLink = styled.a`
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.8rem;
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  color: var(--color-white);
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  color: var(--color-white);
`;

export const BodyInput = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`;

export const SubmitButton = styled.button``;

export const Feedback = styled.div`
  width: 100%;
  text-align: center;
  color: var(--color-white);
`;
