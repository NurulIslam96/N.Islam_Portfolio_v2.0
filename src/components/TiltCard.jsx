import { useRef } from "react";

export default function TiltCard({ children, className = "", glow = "#8b5cf6", style, onClick }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", (-y * 14).toFixed(2) + "deg");
    el.style.setProperty("--ry", (x * 14).toFixed(2) + "deg");
    el.style.setProperty("--mx", (x * 100 + 50).toFixed(1) + "%");
    el.style.setProperty("--my", (y * 100 + 50).toFixed(1) + "%");
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={"tilt-card " + className}
      style={{ ...style, "--glow": glow }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      <div className="tilt-card-glow" />
      <div className="tilt-card-inner">{children}</div>
    </div>
  );
}
