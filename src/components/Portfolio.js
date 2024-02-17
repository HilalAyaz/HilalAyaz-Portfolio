import React from 'react'
import { motion } from 'framer-motion'
import { FiLink } from 'react-icons/fi'
import '../styles/Portfolio.css'
import resumeData from '../assets/resume.json'

const ProjectCard = ({ name, url, description, imageUrl }) => {
  return (
    <motion.div
      className='project-card'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: '300' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 , delay: .2, easing: 'ease' }}
    >
      <div className='card-front'>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          Visit Project <FiLink className='icon' />
        </a>
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const projects = resumeData.projects
  return (
    <div className='portfolio glass-effect'>
      <motion.div
        initial={{ opacity: 0, y: '-150' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        {' '}
        <h1 className='portfolio-title'>My projects</h1>
      </motion.div>
      <div className='portfolio-container'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
