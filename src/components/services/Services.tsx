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
            <ServiceHead>Web Design</ServiceHead>
          </ServiceTop>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>Rich and seamless UI/UX</ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>Responsive designs</ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>Role based access control</ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>SEO compliant sites</ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>SSR with Next.js</ServiceListContent>
            </ServiceListItem>
          </ServiceList>
        </ServicesCard>
        <ServicesCard>
          <ServiceTop>
            <ServiceHead>Web Development</ServiceHead>
          </ServiceTop>
          <ServiceList>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Fast and secure applications
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Robust and scalable web applications
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>RESTful APIs</ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>Graphql</ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Live communications with web sockets
              </ServiceListContent>
            </ServiceListItem>
            <ServiceListItem>
              <BiCheck className="service__icon" />
              <ServiceListContent>
                Containerization using docker
              </ServiceListContent>
            </ServiceListItem>
          </ServiceList>
        </ServicesCard>
      </ServicesContainer>
    </ServicesSection>
  );
}

export default Services;
