import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MailPanel from "./components/MailPanel.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  const [mailOpen, setMailOpen] = useState(false);

  return (
    <>
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="grain" />

      <Navbar onOpenMail={() => setMailOpen(true)} />

      <main>
        <Hero onOpenMail={() => setMailOpen(true)} />
        <About />
        <Projects />
        <Contact onOpenMail={() => setMailOpen(true)} />
      </main>

      <MailPanel open={mailOpen} onClose={() => setMailOpen(false)} prefillSubject="Hello from your portfolio" />
    </>
  );
}
