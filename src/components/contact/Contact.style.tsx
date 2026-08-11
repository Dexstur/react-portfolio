import { styled } from "styled-components";

export const ContactSection = styled.section``;

export const ContactContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 80%;
  }

  @media (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactOption = styled.article`
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  padding: 1.2rem;
  border-radius: var(--radius-md);
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: var(--color-glass-hover);
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const ContactType = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const ContactAddress = styled.h5`
  font-size: 0.75rem;
  color: var(--color-light);
  font-weight: 400;
`;

export const ContactLink = styled.a`
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.75rem;
  color: var(--color-primary);
`;

const inputStyles = `
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: var(--radius-sm);
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  color: var(--color-white);
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  transition: all 300ms ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: var(--color-primary);
    outline: none;
    background: rgba(124, 106, 255, 0.05);
  }
`;

export const NameInput = styled.input`
  ${inputStyles}
`;

export const EmailInput = styled.input`
  ${inputStyles}
`;

export const BodyInput = styled.textarea`
  ${inputStyles}
  resize: none;
`;

export const SubmitButton = styled.button`
  font-family: "Inter", sans-serif;
`;

export const Feedback = styled.div`
  width: 100%;
  text-align: center;
  color: var(--color-primary);
  font-size: 0.85rem;
`;
