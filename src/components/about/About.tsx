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
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container">
        <AboutMe>
          <AboutImgContainer>
            <AboutImg src={Me} alt="Isichei Chukwuka" />
          </AboutImgContainer>
        </AboutMe>
        <AboutContent>
          <AboutDeck>
            <AboutCard>
              <FaAward color="#7c6aff" size="1.4rem" />
              <CardHead>Experience</CardHead>
              <CardSmall>5+ Years</CardSmall>
            </AboutCard>
            <AboutCard>
              <FiUsers color="#7c6aff" size="1.4rem" />
              <CardHead>Collaborators</CardHead>
              <CardSmall>25+ Developers</CardSmall>
            </AboutCard>
            <AboutCard>
              <VscFolderLibrary color="#7c6aff" size="1.4rem" />
              <CardHead>Projects</CardHead>
              <CardSmall>10+ Delivered</CardSmall>
            </AboutCard>
          </AboutDeck>
          <AboutInfo>
            <p>
              Full Stack Developer with expertise building production-grade web
              applications using TypeScript across frontend and backend.
              Experienced delivering fintech, real-time communication,
              healthcare, logistics and enterprise solutions from architecture
              through deployment.
            </p>
            <p>
              Skilled in React, Next.js, Node.js, NestJS, REST, GraphQL, AWS
              deployments, Docker, Redis, SQL/NoSQL databases, authentication,
              and AI-assisted development workflows. I thrive in collaborative
              environments and excel at breaking down complex problems into
              manageable, high-quality deliverables.
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
