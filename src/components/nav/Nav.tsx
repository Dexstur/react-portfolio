import { NavWrapper, NavLogo, NavLinks, NavItem, NavCta } from "./Nav.style";
import { useState, useEffect } from "react";

const sections = ["about", "experience", "portfolio", "testimonial", "contact"];

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveNav("#");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavWrapper>
      <NavLogo href="#">
        IC<span>.</span>
      </NavLogo>
      <NavLinks>
        <NavItem href="#about" $active={activeNav === "#about"}>
          About
        </NavItem>
        <NavItem href="#experience" $active={activeNav === "#experience"}>
          Skills
        </NavItem>
        <NavItem href="#portfolio" $active={activeNav === "#portfolio"}>
          Work
        </NavItem>
        <NavItem href="#testimonial" $active={activeNav === "#testimonial"}>
          Testimonials
        </NavItem>
        <NavCta href="#contact" $active={activeNav === "#contact"}>
          Contact
        </NavCta>
      </NavLinks>
    </NavWrapper>
  );
}

export default Nav;
