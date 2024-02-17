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
          As a full stack web developer, Hilal excels in deciphering intricate
          codes and translating creative visions into sophisticated websites
          with elegant designs. He strives to remain at the forefront of
          technological advancements to deliver cutting-edge solutions. With a
          collaborative approach, he aims to actualize clients' visions with
          flair and finesse, ensuring their projects are brought to life
          seamlessly.
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
