import { HeaderCTA } from "./Header.style";
import CV from "/ISICHEI_CHUKWUKA_CV.pdf";

function CTA() {
  return (
    <HeaderCTA>
      <a href="#contact" className="btn btn-primary">
        Get in touch
      </a>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#portfolio" className="btn">
        View work
      </a>
    </HeaderCTA>
  );
}

export default CTA;
