import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import Modal from "../Modal/Modal";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [show, setShow] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const sections = [
    cardInfo.descBullets && cardInfo.descBullets.length
      ? {heading: "主要职责", items: cardInfo.descBullets}
      : null,
    cardInfo.highlights && cardInfo.highlights.length
      ? {heading: "关键成果", items: cardInfo.highlights}
      : null
  ].filter(Boolean);

  return (
    <>
      <div
        className={isDark ? "experience-card-dark" : "experience-card"}
        style={{cursor: "pointer"}}
        role="button"
        tabIndex={0}
        onClick={() => setShow(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setShow(true);
        }}
      >
        <div
          style={{background: rgb(colorArrays)}}
          className="experience-banner"
        >
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{cardInfo.company}</h5>
          </div>

          <img
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        </div>
        <div className="experience-text-details">
          <h5
            className={
              isDark
                ? "experience-text-role dark-mode-text"
                : "experience-text-role"
            }
          >
            {cardInfo.role}
          </h5>
          <h5
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {cardInfo.date}
          </h5>
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
          <ul>
            <GetDescBullets
              descBullets={cardInfo.descBullets}
              isDark={isDark}
            />
          </ul>
          <span className="experience-more">点击查看完整经历 →</span>
        </div>
      </div>

      <Modal
        open={show}
        onClose={() => setShow(false)}
        isDark={isDark}
        title={`${cardInfo.role} @ ${cardInfo.company}`}
        subtitle={cardInfo.date}
        overview={cardInfo.desc}
        techStack={cardInfo.tech}
        sections={sections}
        links={cardInfo.links}
      />
    </>
  );
}
