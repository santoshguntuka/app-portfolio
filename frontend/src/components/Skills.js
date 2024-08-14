import React from 'react';
import './Skills.css';

function Skills() {
  const skillsList = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'Python',
    'SQL',
    'PySyft',
    // Add more skills as needed
  ];

  const educationList = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'California State University, Dominguez Hills',
      year: '2023',
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'JNTU University',
      year: '2020',
    },
    // Add more education details as needed
  ];

  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2>{skill}</h2>
          </div>
        ))}
      </div>

      <h1>Education</h1>
      <div className="education-list">
        {educationList.map((education, index) => (
          <div key={index} className="education-item">
            <h2>{education.degree}</h2>
            <p>{education.institution}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
