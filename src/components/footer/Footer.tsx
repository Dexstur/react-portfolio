import {
  FooterSection,
  FooterLogo,
  FooterList,
  FooterListItem,
  FooterSocials,
  FooterRights,
  FooterSmall,
} from "./Footer.style";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <FooterSection>
      <FooterLogo href="#">DEXSTUR</FooterLogo>
      <FooterList>
        <FooterListItem>
          <a href="#">Home</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#about">About</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#experience">Experience</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#services">Services</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#portfolio">Portfolio</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#testimonials">Testimonials</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#contact">Contact</a>
        </FooterListItem>
      </FooterList>
      <FooterSocials>
        <a href="https://www.facebook.com/isichei.chuks.1" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://github.com/Dexstur" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chukwuka-isichei-b2b062173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </FooterSocials>
      <FooterRights>
        <FooterSmall>&copy; {new Date().getFullYear()}</FooterSmall>
      </FooterRights>
    </FooterSection>
  );
}

export default Footer;
