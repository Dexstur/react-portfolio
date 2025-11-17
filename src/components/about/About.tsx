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
              <CardSmall>3 Years Work Experience</CardSmall>
            </AboutCard>
            <AboutCard>
              <FiUsers color="#4db5ff" size={"1.4rem"} />
              <CardHead>Collaborators</CardHead>
              <CardSmall>15+ Developers</CardSmall>
            </AboutCard>
            <AboutCard>
              <VscFolderLibrary color="#4db5ff" size={"1.4rem"} />
              <CardHead>Projects</CardHead>
              <CardSmall>10+ Completed projects</CardSmall>
            </AboutCard>
          </AboutDeck>
          <AboutInfo>
            <p>
              Hello there! I am a mid-level full stack developer with 3 years of
              hands-on experience building scalable, user-centric web
              applications using TypeScript, React, Next.js, and Node.js.
              Skilled in designing RESTful and microservice APIs using NestJS,
              Docker, Prisma, MySQL and PostgreSQL. Fast learner with a strong
              grasp of modern development workflows, state management, and UI
              frameworks. Passionate about clean architecture, developer
              experience, and building intuitive frontend experiences
            </p>
            <p>
              I am always willing and eager to learn and try out new
              technologies and frameworks. I excel at breaking down complex
              problems into manageable tasks and delivering high-quality code on
              time. I thrive in collaborative environments and enjoy working
              with cross-functional teams to create innovative solutions.
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
