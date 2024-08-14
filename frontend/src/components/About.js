import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="profile-pic">
          <img src="/1577159321637.jpeg" alt="Santosh Guntuka" />
        </div>
        <div className="about-text">
        <a href="/cs.pdf" download="santosh_guntuka_Resume.pdf" className="btn-resume">Download Resume</a>
          <h1>About Me</h1>
          <p>
            Hello! I'm Santosh Guntuka, a passionate software developer with a strong background in Full Stack Development, particularly in JavaScript, React, and Node.js. My journey in software development started with a deep curiosity for technology and a drive to solve complex problems. This curiosity led me to immerse myself in learning and refining my skills in software development, which has been a fulfilling and continuous journey of growth and discovery.
          </p>
          <p>
            Currently, I'm working as a Machine Learning intern at Dartmouth, where I'm applying my skills to cutting-edge research and projects in the field of artificial intelligence. This experience has broadened my expertise, especially in the application of machine learning techniques to solve complex problems. I'm actively looking for full-time job opportunities where I can leverage my software development and machine learning skills to create innovative and scalable solutions.
          </p>
          <p>
            When I'm not coding, I enjoy playing chess and tennis, which help me sharpen my strategic thinking and stay active. I also like to keep up with the latest in tech by reading blogs and contributing to open-source projects. I'm always eager to learn new things and take on new challenges.
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default About;
