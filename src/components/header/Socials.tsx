import { HeaderSocials } from "./Header.style";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <HeaderSocials>
      <a
        href="https://www.linkedin.com/in/chukwuka-isichei-b2b062173"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Dexstur" target="_blank">
        <FaGithub />
      </a>
    </HeaderSocials>
  );
}

export default Socials;
