import { NavWrapper, NavItem } from "./Nav.style";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <NavWrapper>
      <NavItem
        href="#"
        active={activeNav === "#"}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </NavItem>
      <NavItem
        href="#about"
        active={activeNav === "#about"}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </NavItem>
      <NavItem
        href="#experience"
        active={activeNav === "#experience"}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </NavItem>
      <NavItem
        href="#services"
        active={activeNav === "#services"}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </NavItem>
      <NavItem
        href="#contact"
        active={activeNav === "#contact"}
        onClick={() => setActiveNav("#contact")}
      >
        <MdOutlineMessage />
      </NavItem>
    </NavWrapper>
  );
}

export default Nav;
