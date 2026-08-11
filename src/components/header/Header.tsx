import {
  HeaderWrapper,
  HeaderContainer,
  HeaderContent,
  HeaderLabel,
  HeaderName,
  HeaderTitle,
  HeaderDescription,
  Me,
  MeImageWrapper,
  StatsBar,
  StatItem,
  StatNumber,
  StatLabel,
} from "./Header.style";
import CTA from "./CTA";
import Socials from "./Socials";
import ME from "/psp.png";

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderContainer>
          <HeaderContent>
            <HeaderLabel>Fullstack Developer</HeaderLabel>
            <HeaderName>
              Isichei
              <br />
              Chukwuka<span>.</span>
            </HeaderName>
            <HeaderTitle>Building digital experiences that matter</HeaderTitle>
            <HeaderDescription>
              Full Stack Developer with expertise building production-grade web
              applications using TypeScript across frontend and backend.
              Experienced delivering fintech, healthcare, logistics and
              enterprise solutions.
            </HeaderDescription>
            <CTA />
            <Socials />
          </HeaderContent>
          <Me>
            <MeImageWrapper>
              <img src={ME} alt="Isichei Chukwuka" />
            </MeImageWrapper>
          </Me>
        </HeaderContainer>
        <StatsBar>
          <StatItem>
            <StatNumber>5+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>10+</StatNumber>
            <StatLabel>Projects Delivered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>25+</StatNumber>
            <StatLabel>Collaborators</StatLabel>
          </StatItem>
        </StatsBar>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
