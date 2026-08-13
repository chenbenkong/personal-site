import React, {useEffect} from "react";
import "./Modal.scss";

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  overview,
  techStack,
  sections,
  links,
  isDark
}) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={isDark ? "modal-card dark-mode" : "modal-card"}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="关闭"
          title="关闭"
        >
          ×
        </button>
        <h2 className="modal-title">{title}</h2>
        {subtitle && <p className="modal-subtitle">{subtitle}</p>}
        {overview && <p className="modal-overview">{overview}</p>}

        {techStack && techStack.length > 0 && (
          <div className="modal-section">
            <h4 className="modal-section-title">技术栈</h4>
            <div className="modal-chips">
              {techStack.map((t, i) => (
                <span key={i} className="modal-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {sections &&
          sections.map((s, i) => (
            <div className="modal-section" key={i}>
              <h4 className="modal-section-title">{s.heading}</h4>
              <ul className="modal-list">
                {s.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}

        {links && links.length > 0 && (
          <div className="modal-section modal-links">
            {links.map((l, i) =>
              l.url ? (
                <a
                  key={i}
                  className="modal-link"
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.name}
                </a>
              ) : (
                <span key={i} className="modal-link disabled">
                  {l.name}
                </span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
