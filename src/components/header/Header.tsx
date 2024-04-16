import { HeaderWrapper, HeaderContainer, Me, ScrollDown } from "./Header.style";
import CTA from "./CTA";
import ME from "/psp.png";
import Socials from "./Socials";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        <h5>Hello I'm</h5>
        <h1>Isichei Chukwuka</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />
        <Me>
          <img src={ME} alt="me" />
        </Me>

        <ScrollDown href="#contact">Scroll down</ScrollDown>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
