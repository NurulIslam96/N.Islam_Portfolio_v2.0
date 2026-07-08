import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "../data/content.js";
import { IconMail } from "./Icons.jsx";
import { loadInbox, saveMessage } from "../lib/mailStore.js";
import { isEmailJSConfigured, sendViaEmailJS } from "../lib/emailjs.js";

export default function MailPanel({ open, onClose, prefillSubject }) {
  const [tab, setTab] = useState("compose");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [log, setLog] = useState(null);
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([]);

  const refreshInbox = useCallback(() => {
    setMessages(loadInbox());
  }, []);

  useEffect(() => {
    if (open && tab === "inbox") refreshInbox();
  }, [open, tab, refreshInbox]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setLog(<span className="log-err">Please fill in your name, email and a message.</span>);
      return;
    }
    setSending(true);
    setLog(<span className="log-muted">Sending…</span>);

    const msg = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    const stored = saveMessage(msg);

    let emailedLine = null;
    if (isEmailJSConfigured()) {
      try {
        await sendViaEmailJS(msg);
        emailedLine = "Also emailed via EmailJS.";
      } catch (err) {
        emailedLine = "EmailJS send failed (" + err.message + ") — still saved locally.";
      }
    }

    setLog(
      <span>
        {stored ? "✓ Message saved to your local inbox." : "Could not save locally."}
        {emailedLine ? " " + emailedLine : ""}
      </span>
    );
    if (stored) {
      setName("");
      setEmail("");
      setMessage("");
    }
    setSending(false);
  };

  const mailtoHref =
    "mailto:" +
    PROFILE.email +
    "?subject=" +
    encodeURIComponent(prefillSubject || "Portfolio contact") +
    "&body=" +
    encodeURIComponent(message || "");

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="mail-scrim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mail-modal"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.32, ease: [0.2, 0.8, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mail-modal-glow" />
            <div className="mail-head">
              <div className="mail-head-title">
                <IconMail size={16} /> Message me
              </div>
              <button className="mail-close" onClick={onClose}>
                ×
              </button>
            </div>

            <div className="mail-tabs">
              <button
                className={"mail-tab" + (tab === "compose" ? " active" : "")}
                onClick={() => setTab("compose")}
              >
                Compose
              </button>
              <button
                className={"mail-tab" + (tab === "inbox" ? " active" : "")}
                onClick={() => setTab("inbox")}
              >
                Messages
              </button>
            </div>

            {tab === "compose" && (
              <div className="mail-body">
                <div className="mail-note">
                  {isEmailJSConfigured()
                    ? "Sent messages are emailed to me directly and also saved to this browser."
                    : (
                      <>
                        Messages save to <b>this browser's</b> local storage and show up in
                        "Messages". For a guaranteed, private send right now, use "Email directly".
                      </>
                    )}
                </div>
                <form onSubmit={handleSend}>
                  <label className="input-label">Your name</label>
                  <input
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                  <label className="input-label">Your email</label>
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                  />
                  <label className="input-label">Message</label>
                  <textarea
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let's build something…"
                  />
                  <div className="send-row">
                    <button className="btn-glow" type="submit" disabled={sending}>
                      {sending ? "Sending…" : "Send message"}
                    </button>
                    <a className="btn-ghost" href={mailtoHref}>
                      Email directly
                    </a>
                  </div>
                </form>
                {log && <div className="console">{log}</div>}
              </div>
            )}

            {tab === "inbox" && (
              <div className="mail-body">
                <div className="mail-note">
                  This inbox lives only in your browser — it won't show messages sent from
                  someone else's device unless EmailJS is configured.
                </div>
                {messages.length === 0 && (
                  <div className="empty-inbox">No messages yet — try sending yourself a test one.</div>
                )}
                {messages.map((m) => (
                  <div className="msg-item" key={m.id}>
                    <div className="msg-item-top">
                      <span>
                        {m.name} &lt;{m.email}&gt;
                      </span>
                      <span className="msg-item-time">{new Date(m.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="msg-item-body">{m.message}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
