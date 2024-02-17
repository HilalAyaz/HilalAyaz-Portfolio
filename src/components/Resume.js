import React from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
  FiLink2
} from 'react-icons/fi'
import { FaMapLocationDot } from 'react-icons/fa6'
import resumeData from '../assets/resume.json'
import '../styles/Resume.css'

const Resume = () => {
  const {
    name,
    title,
    contact,
    summary,
    education,
    certifications,
    expertise,
    projects,
    skills
  } = resumeData

  return (
    <motion.div
      className='resume'
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='name'>{name}</h1>
        <h2 className='title'>{title}</h2>
      </motion.div>

      <motion.div
        className='section summary'
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h3>Summary</h3>
        <p>{summary}</p>
      </motion.div>

      <motion.div
        className='section education'
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}</p>
            <p>{edu.university}</p>
            <p>{edu.dates}</p>
            <a
              href={edu.url}
              target='_blank'
              rel='noopener noreferrer'
              className='certificate-link'
            >
              Credentials <FiExternalLink className='icons' />
            </a>
          </div>
        ))}
      </motion.div>
      <motion.div
        className='section expertise'
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3>Expertise</h3>
        <p>Web Development: {expertise.web_development.join(', ')}</p>
        <p>REST API: {expertise.rest_api.join(', ')}</p>
        <p>Data Analysis: {expertise.data_analysis.join(', ')}</p>
        <p>Version Control: {expertise.version_control.join(', ')}</p>
        <p>Project Management: {expertise.project_management.join(', ')}</p>
        <p>Database Management: {expertise.database_management.join(', ')}</p>
      </motion.div>

      <motion.div
        className='section projects'
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className='project-item'>
            <p>
              {' '}
              <a href={project.url} className='project-link'>
                {project.name} <FiLink2 className='icons' />
              </a>
            </p>
            <p className='project-description'>{project.description}</p>
          </div>
        ))}
      </motion.div>
      <motion.div
        className='section certifications'
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3>Certifications</h3>
        {certifications.map((cert, index) => (
          <div key={index} className='certificate-item'>
            <p className='cert-title'>{cert.title}</p>
            <p className='cert-platform'>{cert.platform}</p>
            <p className='cert-date'>{cert.date}</p>
            <a href={cert.link} className='certificate-link'>
              Credentials <FiExternalLink className='icons' />
            </a>
          </div>
        ))}
      </motion.div>
      <motion.div
        className='section contact'
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3>Contact</h3>
        <p>
          <FiMail /> Email:{' '}
          <a href='mailto:{contact.email}' className='link'>
            Write Email to me
          </a>
        </p>

        <p>
          <FiLinkedin /> LinkedIn:{' '}
          <a href={contact.linkedin.url} className='link'>
            {contact.linkedin.username} <FiExternalLink className='icons' />
          </a>
        </p>
        <p>
          <FiGithub /> GitHub:{' '}
          <a href={contact.github.url} className='link'>
            {contact.github.username} <FiExternalLink className='icons' />
          </a>
        </p>
        <p>
          <FaMapLocationDot /> Location: {contact.location}
        </p>
      </motion.div>
      <motion.div
        className='section skills'
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h3>Skills</h3>
        <div className='skill-category'>
          <h4>Hard Skills:</h4>
          {skills.hard_skills.map((skill, index) => (
            <p key={index} className='skill'>
              {skill}
            </p>
          ))}
        </div>
        <div className='skill-category'>
          <h4>Soft Skills:</h4>
          {skills.soft_skills.map((skill, index) => (
            <p key={index} className='skill'>
              {skill}
            </p>
          ))}
        </div>
        <div className='skill-category'>
          <h4>Languages:</h4>
          {skills.languages.map((language, index) => (
            <p key={index} className='skill'>
              {language}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Resume
