import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../data/content.js";
import TiltCard from "../components/TiltCard.jsx";
import Carousel from "../components/Carousel.jsx";
import { IconArrow, IconGithub } from "../components/Icons.jsx";

export default function Projects() {
  const [openSlug, setOpenSlug] = useState(null);
  const openProject = PROJECTS.find((p) => p.slug === openSlug);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">02 — Selected work</span>
        <h2 className="section-title">
          Things I've <span className="gradient-text">shipped</span>
        </h2>
        <p className="section-lede">Three full-stack apps, live and open source. Tap a card for details.</p>
      </motion.div>

      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.3, 1] }}
          >
            <TiltCard glow={p.glow} onClick={() => setOpenSlug(p.slug)} className="project-card">
              <div className="project-card-thumb">
                <img src={p.thumbnail} alt={p.name} />
                <span className="project-card-num" style={{ background: p.gradient }}>
                  0{i + 1}
                </span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <div className="project-card-cta">
                View details <IconArrow size={14} />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {createPortal(
        <AnimatePresence>
          {openProject && (
            <motion.div
              className="modal-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenSlug(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{ "--glow": openProject.glow }}
              >
                <button className="modal-close" onClick={() => setOpenSlug(null)}>
                  ×
                </button>
                <Carousel images={openProject.images} alt={openProject.name} />
                <div className="project-modal-body">
                  <h3>{openProject.name}</h3>
                  <p className="modal-desc">{openProject.description}</p>

                  <div className="modal-features">
                    {openProject.features.map((f) => (
                      <div className="modal-feature" key={f}>
                        <span className="skill-dot" style={{ background: openProject.glow }} />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="badge-row">
                    {openProject.tech.map((t) => (
                      <span className="badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="hero-actions" style={{ marginTop: 22 }}>
                    <a className="btn-glow" href={openProject.live} target="_blank" rel="noreferrer">
                      Live demo <IconArrow size={14} />
                    </a>
                    <a className="btn-ghost" href={openProject.client} target="_blank" rel="noreferrer">
                      <IconGithub size={14} /> Client
                    </a>
                    <a className="btn-ghost" href={openProject.server} target="_blank" rel="noreferrer">
                      <IconGithub size={14} /> Server
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
