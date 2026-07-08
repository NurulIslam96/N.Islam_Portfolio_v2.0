import { motion } from "framer-motion";
import { PROFILE } from "../data/content.js";
import { IconPin, IconPhone, IconMail } from "../components/Icons.jsx";

export default function Contact({ onOpenMail }) {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="contact-panel"
      >
        <div className="contact-glow" />
        <span className="section-eyebrow">03 — Get in touch</span>
        <h2 className="section-title">
          Let's build something <span className="gradient-text">great</span>
        </h2>
        <p className="section-lede">
          Open to remote collaborations, specialized project work, and full-time roles. Drop me a line directly through the message panel — it’s active, real-time, and goes straight to my inbox.
        </p>

        <div className="info-block">
          <div className="info-row">
            <IconPin /> {PROFILE.location}
          </div>
          <div className="info-row">
            <IconPhone /> {PROFILE.phone}
          </div>
          <div className="info-row">
            <IconMail /> {PROFILE.email}
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-glow" onClick={onOpenMail}>
            <IconMail size={16} /> Open message panel
          </button>
          <a className="btn-ghost" href={"mailto:" + PROFILE.email}>
            Email directly
          </a>
        </div>
      </motion.div>

      <footer className="footer">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Three.js &amp; Framer Motion.
      </footer>
    </section>
  );
}
