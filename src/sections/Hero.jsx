import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroScene from "../components/HeroScene.jsx";
import { PROFILE } from "../data/content.js";
import { IconGithub, IconLinkedin, IconDownload, IconMail } from "../components/Icons.jsx";

function useCycler(words, typeSpeed = 65, deleteSpeed = 32, pause = 1200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[idx];
    const speed = deleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), pause);
      } else if (text.length > 0) {
        setText(full.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setIdx((idx + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero({ onOpenMail }) {
  const role = useCycler(PROFILE.roles);
  const [showToast, setShowToast] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 2600);
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <section id="home" className="hero">
      <div className="hero-scene">
        <HeroScene />
      </div>
      <div className="hero-veil" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.3, 1] }}
      >
        <img className="hero-avatar" src={PROFILE.photo} alt={PROFILE.name} />
        <h1 className="hero-title">
          <span className="gradient-text">{PROFILE.name}</span>
        </h1>
        <div className="hero-role">
          {role}
          <span className="cursor" />
        </div>
        <p className="hero-lede">
          I design and build full-stack web products with React, Node and MongoDB — fast,
          polished, and built to actually ship, not just demo well.
        </p>

        <div className="hero-actions">
          <button className="btn-glow" onClick={onOpenMail}>
            <IconMail size={16} /> Send a message
          </button>
          <button className="btn-ghost btn-disabled" onClick={handleResumeClick}>
            <IconDownload size={16} /> Résumé
          </button>
        </div>

        <div className="hero-socials">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGithub size={18} />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedin size={18} />
          </a>
        </div>
      </motion.div>

      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            className="resume-toast"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.3, 1] }}
          >
            🔒 Résumé download has been disabled by the Admin.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}