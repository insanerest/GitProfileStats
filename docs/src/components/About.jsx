
import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About GitProfileStats</h1>
      <div className="about-content">
        <p>
          <strong>GitProfileStats</strong> is a comprehensive tool designed to
          provide an in-depth overview of a user's GitHub profile. Whether you
          are a developer looking to showcase your activity, a recruiter seeking
          to analyze candidate profiles, or just a curious user, GitProfileStats
          offers an easy way to view important details about any GitHub user in
          one place.
        </p>
        <p>
          Our platform displays key information such as profile photo, name,
          login username, bio, repositories, profile views,
          followers, and much more. With clear and concise stats,
          GitProfileStats helps you understand GitHub activity at a glance.
        </p>
        <p>
          Built with React, we ensure the highest standards of
          performance and security. This open-source project can be customized
          and expanded to fit the needs of any developer, and it’s continuously
          updated with new features and enhancements.
        </p>
      </div>
      <div className="about-footer">
        <p>
          If you’d like to contribute or explore more, visit the{" "}
          <a
            href="https://github.com/insanerest/GitProfileStats"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitProfileStats GitHub repository
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
