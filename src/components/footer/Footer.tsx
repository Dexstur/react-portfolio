import {
  FooterSection,
  FooterLogo,
  FooterList,
  FooterListItem,
  FooterSocials,
  FooterRights,
  FooterSmall,
} from "./Footer.style";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <FooterSection>
      <FooterLogo href="#">
        IC<span>.</span>
      </FooterLogo>
      <FooterList>
        <FooterListItem>
          <a href="#">Home</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#about">About</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#experience">Skills</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#portfolio">Work</a>
        </FooterListItem>
        <FooterListItem>
          <a href="#contact">Contact</a>
        </FooterListItem>
      </FooterList>
      <FooterSocials>
        <a href="https://github.com/Dexstur" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chukwuka-isichei-b2b062173"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </FooterSocials>
      <FooterRights>
        <FooterSmall>&copy; {new Date().getFullYear()} Isichei Chukwuka. All rights reserved.</FooterSmall>
      </FooterRights>
    </FooterSection>
  );
}

export default Footer;
