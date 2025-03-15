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
          Experienced MERN Stack Developer with a strong command of React.js,
          Next.js, JavaScript, and CSS, specializing in building responsive,
          high-performance UIs with smooth animations and interactive
          components. Skilled in developing scalable and efficient backend
          solutions using Node.js, Express.js, and MongoDB, ensuring seamless
          data management and API integrations. 
          <br/>
          <br /> 
          Proficient in optimizing performance, implementing best coding
          practices, and maintaining clean, modular code for maintainability and
          scalability. Adept at using Git & GitHub for version control,
          collaborating in team environments, and managing projects efficiently.{' '}
          <br />
          <br />
          A quick learner and problem solver, always eager to explore new
          technologies and frameworks to improve development processes.
          Passionate about creating intuitive, user-friendly full-stack
          applications that blend functionality with engaging design. Dedicated
          to continuous learning and professional growth, staying up-to-date
          with the latest industry trends and advancements. <br />
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
