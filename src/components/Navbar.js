import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sling as Hamburger } from 'hamburger-react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-line'></div>
      <motion.ul
        className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: .6 }}
      >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/portfolio'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </motion.ul>
      <div className='burger-icon' onClick={handleMobileMenuToggle}>
        <Hamburger />
      </div>
    </nav>
  )
}

export default Navbar