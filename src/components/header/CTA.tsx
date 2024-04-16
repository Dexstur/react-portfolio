import { HeaderCTA } from "./Header.style";
import CV from "/ISICHEI_CHUKWUKA_CV.pdf";

function CTA() {
  return (
    <HeaderCTA>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </HeaderCTA>
  );
}

export default CTA;
