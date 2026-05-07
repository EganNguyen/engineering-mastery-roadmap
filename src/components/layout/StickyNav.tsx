"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Projects", href: "#projects" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const link of links) {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky-nav-wrapper">
      <nav className="sticky-nav">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link ${activeSection === link.href ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
