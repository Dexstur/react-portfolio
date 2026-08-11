import {
  ServicesSection,
  ServicesContainer,
  ServicesCard,
  ServiceTop,
  ServiceHead,
  ServiceList,
  ServiceListItem,
  ServiceListContent,
} from "./Services.style";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <ServicesSection id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <ServicesContainer className="container">
        <ServicesCard>
          <ServiceTop>
            <ServiceHead>Frontend Development</ServiceHead>
          </ServiceTop>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Responsive, performant UIs with React and Next.js
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Modern styling with Tailwind CSS, shadcn/ui and Styled
                Components
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Interactive dashboards with Recharts and Chart.js
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Map integrations with Google Maps and Leaflet
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                SSR, SEO optimization and smooth animations with Framer Motion
              </ServiceListContent>
            </ServiceListItem>
          </ServiceList>
        </ServicesCard>
        <ServicesCard>
          <ServiceTop>
            <ServiceHead>Backend Development</ServiceHead>
          </ServiceTop>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Scalable APIs with Node.js, NestJS and Express
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                REST, GraphQL and WebSocket real-time communication
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Database design with PostgreSQL, MongoDB, MySQL and Redis
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Authentication, RBAC and security with JWT and Passport
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Containerization with Docker and AWS deployment workflows
              </ServiceListContent>
            </ServiceListItem>
          </ServiceList>
        </ServicesCard>
      </ServicesContainer>
    </ServicesSection>
  );
}

export default Services;
