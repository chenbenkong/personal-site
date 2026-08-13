import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              const primaryUrl =
                project.footerLink && project.footerLink[0]
                  ? project.footerLink[0].url
                  : "";
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {project.tech && project.tech.length > 0 && (
                      <div className="exp-tech">
                        {project.tech.map((t, i) => (
                          <span key={i} className="exp-tech-chip">{t}</span>
                        ))}
                      </div>
                    )}

                    {project.features && project.features.length > 0 && (
                      <div className="project-section">
                        <span className="project-section-label">核心功能</span>
                        <ul className="project-list">
                          {project.features.map((f, i) => (
                            <li key={i} className={isDark ? "dark-mode-text" : ""}>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.outcomes && project.outcomes.length > 0 && (
                      <div className="project-section">
                        <span className="project-section-label">成果</span>
                        <ul className="project-list">
                          {project.outcomes.map((o, i) => (
                            <li key={i} className={isDark ? "dark-mode-text" : ""}>
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.footerLink && project.footerLink[0] && (
                      <button
                        type="button"
                        className="exp-repo-link"
                        onClick={() => openUrlInNewTab(primaryUrl)}
                      >
                        {project.footerLink[0].name} →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
