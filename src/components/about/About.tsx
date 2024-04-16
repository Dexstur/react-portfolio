import {
  AboutSection,
  AboutContainer,
  AboutMe,
  AboutImgContainer,
  AboutImg,
  AboutContent,
  AboutDeck,
  AboutCard,
  CardHead,
  CardSmall,
  AboutInfo,
} from "./About.style";
import Me from "/grayed.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <AboutSection id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container">
        <AboutMe>
          <AboutImgContainer>
            <AboutImg src={Me} alt="me" />
          </AboutImgContainer>
        </AboutMe>
        <AboutContent>
          <AboutDeck>
            <AboutCard>
              <FaAward color="#4db5ff" size={"1.4rem"} />
              <CardHead>Experience</CardHead>
              <CardSmall>1 Year Work Experience</CardSmall>
            </AboutCard>
            <AboutCard>
              <FiUsers color="#4db5ff" size={"1.4rem"} />
              <CardHead>Collaborators</CardHead>
              <CardSmall>15+ Developers</CardSmall>
            </AboutCard>
            <AboutCard>
              <VscFolderLibrary color="#4db5ff" size={"1.4rem"} />
              <CardHead>Projects</CardHead>
              <CardSmall>6+ Completed projects</CardSmall>
            </AboutCard>
          </AboutDeck>
          <AboutInfo>
            <p>
              Hello there! I'm a full stack developer, and this is where my
              digital journey unfolds. I'm here to turn ideas into immersive web
              experiences, blending innovation with technology. My work is a
              fusion of creativity and functionality,with the aim of delivering
              efficient and optimized solutions, I can't wait to share it with
              you.
            </p>
            <p>
              Whether you're a fellow developer looking to collaborate or an
              employer seeking a tech-savvy problem solver, let's connect and
              create something extraordinary. Explore my portfolio to see what I
              can bring to the table.
            </p>
          </AboutInfo>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
