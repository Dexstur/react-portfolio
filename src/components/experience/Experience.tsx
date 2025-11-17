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
          <ExpCardHead>Frontend Development</ExpCardHead>
          <ExpContent>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>HTML</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>CSS</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Javascript</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Bootstrap</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Tailwind</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>React</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Nextjs</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
          </ExpContent>
        </ExpCard>
        <ExpCard>
          <ExpCardHead>Backend Development</ExpCardHead>
          <ExpContent>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Nodejs</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Nestjs</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>C#</ExpSkillHead>
                <ExpSkillSmall className="text-light">Basic</ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>MongoDB</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>SQL</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>GraphQl</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Experienced
                </ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Java</ExpSkillHead>
                <ExpSkillSmall className="text-light">Basic</ExpSkillSmall>
              </div>
            </ExpSkill>
            <ExpSkill>
              <BsPatchCheckFill className="exp__icon" />
              <div>
                <ExpSkillHead>Docker</ExpSkillHead>
                <ExpSkillSmall className="text-light">
                  Intermediate
                </ExpSkillSmall>
              </div>
            </ExpSkill>
          </ExpContent>
        </ExpCard>
      </ExpContainer>
    </ExperienceSection>
  );
}

export default Experience;
