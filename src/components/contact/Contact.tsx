import {
  ContactSection,
  ContactContainer,
  ContactOptions,
  ContactForm,
  ContactOption,
  ContactType,
  ContactAddress,
  ContactLink,
  NameInput,
  EmailInput,
  BodyInput,
  SubmitButton,
  Feedback,
} from "./Contact.style";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPayload({ ...payload, [e.currentTarget.name]: e.currentTarget.value });
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setFeedback("Sending...");
    emailjs
      .send("service_n0i3wt1", "template_5wsi86e", payload, "ECMbgP9k6iQ5XrmFC")
      .then(
        () => {
          setPayload({ name: "", email: "", message: "" });
          setFeedback("Email sent");
          setTimeout(() => {
            setFeedback("");
          }, 3000);
        },
        () => {
          setPayload({ name: "", email: "", message: "" });
          setFeedback("Email not sent");
          setTimeout(() => {
            setFeedback("");
          }, 3000);
        }
      );
  };
  return (
    <ContactSection id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <MdOutlineMail className="contact__option-icon" />
            <ContactType>Email</ContactType>
            <ContactAddress>isicheichukwukao@gmail.com</ContactAddress>
            <ContactLink href="mailto:isicheichukwukao@gmail.com">
              Send Mail
            </ContactLink>
          </ContactOption>
          <ContactOption>
            <RiMessengerLine className="contact__option-icon" />
            <ContactType>Messenger</ContactType>
            <ContactAddress>Isichei Chuks</ContactAddress>
            <ContactLink href="https://m.me/isichei.chuks.1" target="_blank">
              Send a message
            </ContactLink>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp className="contact__option-icon" />
            <ContactType>Whatsapp</ContactType>
            <ContactAddress>Chat</ContactAddress>
            <ContactLink
              href="https://api.whatsapp.com/send?phone=2348099157011"
              target="_blank"
            >
              Send a DM
            </ContactLink>
          </ContactOption>
        </ContactOptions>
        <ContactForm onSubmit={sendEmail}>
          <NameInput
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={handleChange}
            value={payload.name}
            required
          />
          <EmailInput
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={payload.email}
            required
          />
          <BodyInput
            name="message"
            rows={7}
            placeholder="Your Message"
            onChange={handleChange}
            value={payload.message}
            required
          />
          <SubmitButton type="submit" className="btn btn-primary">
            Send Message
          </SubmitButton>
          <Feedback>{feedback}</Feedback>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;
