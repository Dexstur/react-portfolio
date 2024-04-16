import { HeaderSocials } from "./Header.style";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <HeaderSocials>
      <a
        href="https://www.linkedin.com/in/chukwuka-isichei-b2b062173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
