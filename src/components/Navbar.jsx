import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenMail }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <motion.div
        className="navbar-anim"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.3, 1] }}
      >
        <div className="navbar-inner">
          <button className="brand" onClick={() => goTo("home")}>
            <span className="brand-dot" /> Md. Nurul Islam
          </button>

          <div className="nav-links">
            {LINKS.map((l) => (
              <button
                key={l.id}
                className={"nav-link" + (active === l.id ? " active" : "")}
                onClick={() => goTo(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button className="btn-glow small" onClick={onOpenMail}>
            Say hi
          </button>

          <button className="burger" onClick={() => setMenuOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => goTo(l.id)}>
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenMail();
              }}
            >
              Say hi
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
