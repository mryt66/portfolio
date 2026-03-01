import { useState, useEffect } from "react";
import "./Navbar.css";

const sections = ["About", "Skills", "Projects", "Interests"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <span className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        MR
      </span>
      <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar__links${open ? " open" : ""}`}>
        {sections.map((s) => (
          <li key={s} className="navbar__link" onClick={() => navigate(s)}>
            {s}
          </li>
        ))}
      </ul>
    </nav>
  );
}
