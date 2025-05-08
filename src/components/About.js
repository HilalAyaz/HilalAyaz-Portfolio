import React from 'react'
import { motion } from 'framer-motion'
import myImage from '../assets/myself.png'
import '../styles/About.css'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'

const About = () => {
  return (
    <div className='main-container glass-effect'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='image-container'
      >
        <img src={myImage} alt='Hilal' className='profile-image' />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='content-container'
      >
        <h3>About Me</h3>
        <h5>
          Full Stack Developer specializing in building modern, responsive web
          applications using React.js, Next.js, JavaScript, and CSS. I craft
          clean, interactive UIs with smooth animations and focus on performance
          and scalability. On the backend, I develop robust APIs and databases
          using Node.js, Express.js, and MongoDB.
          <br />
          <br />
          Proficient in Git/GitHub, I thrive in collaborative environments and
          manage projects with efficiency. I'm passionate about creating
          user-friendly, visually appealing apps and continuously exploring new
          tools and technologies to enhance my craft.
          <br />
        </h5>
        <Link to='/resume'>
          <motion.button
            type='button'
            initial={{ opacity: 0, y: '200' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            My Resume
            <FaArrowCircleRight className='icon' />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default About
