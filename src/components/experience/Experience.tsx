import {
  ExperienceSection,
  ExpContainer,
  ExpCard,
  ExpCardHead,
  ExpContent,
  ExpSkill,
} from "./Experience.style";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "PrimeReact",
      "shadcn/ui",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    title: "State Management & Data Fetching",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "SWR",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "JWT / Passport",
      "class-validator",
      "Microservices",
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Sequelize",
      "Mongoose",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "AWS (EC2, S3)",
      "Docker",
      "nginx",
      "Git",
      "Swagger / OpenAPI",
      "Agile / Scrum",
      "AI-assisted Development",
    ],
  },
  {
    title: "Data Visualization & Maps",
    skills: [
      "Recharts",
      "Chart.js",
      "Google Maps",
      "OpenStreetMap",
      "Leaflet",
    ],
  },
];

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <ExpContainer className="container">
        {skillGroups.map((group) => (
          <ExpCard key={group.title}>
            <ExpCardHead>{group.title}</ExpCardHead>
            <ExpContent>
              {group.skills.map((skill) => (
                <ExpSkill key={skill}>{skill}</ExpSkill>
              ))}
            </ExpContent>
          </ExpCard>
        ))}
      </ExpContainer>
    </ExperienceSection>
  );
}

export default Experience;
