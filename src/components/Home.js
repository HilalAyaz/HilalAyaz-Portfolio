import { motion } from 'framer-motion'
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowCircleRight,
  FaYoutube,
  FaBehance,
  FaArrowCircleDown
} from 'react-icons/fa'

import '../styles/Home.css'
import { Link } from 'react-router-dom'
import CV from '../assets/Hilal Ayaz- Full Stack Developer.pdf'
import resumeData from '../assets/resume.json'
import TechStack from './tech-stack.js'

const Home = () => {
  const { name, title, aboutMe, contact } = resumeData

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Hilal Ayaz- Full Stack Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <motion.div className='main-text glass-effect'>
      <motion.h2
        initial={{ opacity: 0, y: '-300' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        {name}
      </motion.h2>{' '}
      <motion.h1
        initial={{ opacity: 0, x: '300' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am a <br />
        <span>{title}</span>
      </motion.h1>
      <motion.div
        className='tech-icons'
        initial={{ opacity: 0, x: '300' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <h4>My Tech Stack:</h4>
        <TechStack />
      </motion.div>
      <motion.div
        className='social-icons'
        initial={{ opacity: 0, x: '300' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <h4>Connect With Me:</h4>
        <a
          href={contact.linkedin.url}
          target='_blank'
          rel='noreferrer'
          title='LinkedIn'
        >
          <FaLinkedin style={{ color: '#0077b5' }} />
        </a>
        <a
          href={contact.github.url}
          target='_blank'
          rel='noreferrer'
          title='GitHub'
        >
          <FaGithub style={{ color: '#fff' }} />
        </a>

        <a
          href={contact.instagram.url}
          target='_blank'
          rel='noreferrer'
          title='Instagram'
        >
          <FaInstagram style={{ color: '#c13584' }} />
        </a>

        <a
          href={contact.youtube.url}
          target='_blank'
          rel='noreferrer'
          title='YouTube'
        >
          <FaYoutube style={{ color: '#ff0000' }} />
        </a>

        <a
          href={contact.behance.url}
          target='_blank'
          rel='noreferrer'
          title='Behance'
        >
          <FaBehance style={{ color: '#1769ff' }} />
        </a>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: '300' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        {aboutMe}
      </motion.p>
      <div className='button-container'>
        <Link to='/about'>
          <motion.button
            type='button'
            initial={{ opacity: 0, x: '300' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            About me
            <FaArrowCircleRight className='icon' />
          </motion.button>
        </Link>

        <motion.button
          type='button'
          initial={{ opacity: 0, x: '150' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className='last-button'
          onClick={handleDownload}
        >
          Download CV <FaArrowCircleDown className='icon' />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Home
