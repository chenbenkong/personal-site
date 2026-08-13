import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Modal from "../../components/Modal/Modal";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const [active, setActive] = useState(null);

  if (!bigProjects.display) {
    return null;
  }

  const sections = (project) =>
    [
      project.features && project.features.length
        ? {heading: "功能特性", items: project.features}
        : null,
      project.outcomes && project.outcomes.length
        ? {heading: "成果与影响", items: project.outcomes}
        : null
    ].filter(Boolean);

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
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                  style={{cursor: "pointer"}}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(project);
                  }}
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
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
                    <span className="project-more">点击查看项目详情 →</span>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={(e) => {
                                e.stopPropagation();
                                openUrlInNewTab(link.url);
                              }}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        isDark={isDark}
        title={active ? active.projectName : ""}
        subtitle="项目详情"
        overview={active ? active.projectDesc : ""}
        techStack={active ? active.tech : []}
        sections={active ? sections(active) : []}
        links={active ? active.footerLink : []}
      />
    </Fade>
  );
}
