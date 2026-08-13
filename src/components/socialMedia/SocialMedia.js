import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

const LABELS = {
  github: "GitHub",
  linkedin: "LinkedIn",
  gmail: "Email",
  gitlab: "GitLab",
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "Twitter",
  medium: "Medium",
  stackoverflow: "StackOverflow",
  kaggle: "Kaggle"
};

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {Object.keys(LABELS).map((key) => {
        const value = socialMediaLinks[key];
        if (!value) return null;
        const href = key === "gmail" ? `mailto:${value}` : value;
        return (
          <a
            key={key}
            href={href}
            className={`icon-button ${key}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-label">{LABELS[key]}</span>
          </a>
        );
      })}
    </div>
  );
}
