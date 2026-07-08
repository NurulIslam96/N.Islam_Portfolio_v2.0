import { motion } from "framer-motion";
import { SKILLS } from "../data/content.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.2, 0.8, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.3, 1] }}
      >
        <span className="section-eyebrow">01 — Toolkit</span>
        <h2 className="section-title">
          Built on the <span className="gradient-text">MERN</span> stack
        </h2>
        <p className="section-lede">
          The technologies I reach for most, day to day — comfortable moving between the
          frontend and backend of a project rather than sticking to just one half of the stack.
        </p>
      </motion.div>

      <motion.div
        className="skill-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {SKILLS.map((s) => (
          <motion.div className="skill-chip" variants={item} key={s.name}>
            <span className="skill-dot" />
            {s.name}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="about-copy"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Hard-working and adaptable — equally at home starting something from a blank repo or
        picking up someone else's half-built feature under a tight deadline. Always looking to
        pick up the next tool a project actually calls for.
      </motion.p>
    </section>
  );
}
