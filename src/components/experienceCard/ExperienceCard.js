import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  function handleOpen(url) {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  const repoLink =
    cardInfo.links && cardInfo.links[0] ? cardInfo.links[0] : null;

  const detailClass = isDark ? "subTitle dark-mode-text" : "subTitle";

  return (
    <div
      className={isDark ? "experience-card-dark" : "experience-card"}
    >
      <div className="experience-text-details">
        <div className="experience-head">
          <div>
            <h5 className={isDark ? "experience-text-role dark-mode-text" : "experience-text-role"}>
              {cardInfo.role}
            </h5>
            <h6 className={isDark ? "experience-text-company dark-mode-text" : "experience-text-company"}>
              {cardInfo.company}
            </h6>
          </div>
          <span className={isDark ? "experience-text-date dark-mode-text" : "experience-text-date"}>
            {cardInfo.date}
          </span>
        </div>

        <p className={detailClass + " experience-text-desc"}>{cardInfo.desc}</p>

        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="experience-bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i} className={detailClass}>{item}</li>
            ))}
          </ul>
        )}

        {cardInfo.tech && cardInfo.tech.length > 0 && (
          <div className="exp-tech">
            {cardInfo.tech.map((t, i) => (
              <span key={i} className="exp-tech-chip">{t}</span>
            ))}
          </div>
        )}

        {cardInfo.highlights && cardInfo.highlights.length > 0 && (
          <div className="exp-highlights">
            {cardInfo.highlights.map((h, i) => (
              <span key={i} className="exp-highlight-item">{h}</span>
            ))}
          </div>
        )}

        {repoLink && (
          <button
            type="button"
            className="exp-repo-link"
            onClick={() => handleOpen(repoLink.url)}
          >
            {repoLink.name} →
          </button>
        )}
      </div>
    </div>
  );
}
