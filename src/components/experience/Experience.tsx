import {
  ExperienceSection,
  ExpContainer,
  ExpCard,
  ExpCardHead,
  ExpContent,
  ExpSkill,
  ExpSkillHead,
  ExpSkillSmall,
} from "./Experience.style";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <ExpContainer className="container">
        <ExpCard>
          <ExpCardHead>Frontend</ExpCardHead>
          <ExpContent>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>HTML</ExpSkillHead>
              <ExpSkillSmall className="text-light">Experienced</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>CSS</ExpSkillHead>
              <ExpSkillSmall className="text-light">Intermediate</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>Javascript</ExpSkillHead>
              <ExpSkillSmall className="text-light">Experienced</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>Bootstrap</ExpSkillHead>
              <ExpSkillSmall className="text-light">Experienced</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>Tailwind</ExpSkillHead>
              <ExpSkillSmall className="text-light">Experienced</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>React</ExpSkillHead>
              <ExpSkillSmall className="text-light">Intermediate</ExpSkillSmall>
            </ExpSkill>
          </ExpContent>
        </ExpCard>
        <ExpCard>
          <ExpCardHead>Backend</ExpCardHead>
          <ExpContent>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>Nodejs</ExpSkillHead>
              <ExpSkillSmall className="text-light">Intermediate</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>C#</ExpSkillHead>
              <ExpSkillSmall className="text-light">Basic</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>MongoDB</ExpSkillHead>
              <ExpSkillSmall className="text-light">intermediate</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>SQL</ExpSkillHead>
              <ExpSkillSmall className="text-light">Intermediate</ExpSkillSmall>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill />
              <ExpSkillHead>GraphQl</ExpSkillHead>
              <ExpSkillSmall className="text-light">Basic</ExpSkillSmall>
            </ExpSkill>
          </ExpContent>
        </ExpCard>
      </ExpContainer>
    </ExperienceSection>
  );
}

export default Experience;
