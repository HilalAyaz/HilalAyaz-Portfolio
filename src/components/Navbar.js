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

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-line'></div>
      <motion.ul
        className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.6 }}
      >
        <li>
          <Link to='/' onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to='/about' onClick={handleLinkClick}>About</Link>
        </li>
        <li>
          <Link to='/resume' onClick={handleLinkClick}>Resume</Link>
        </li>
        <li>
          <Link to='/portfolio' onClick={handleLinkClick}>Projects</Link>
        </li>
        <li>
          <Link to='/contact' onClick={handleLinkClick}>Contact</Link>
        </li>
      </motion.ul>
      <div className='burger-icon' onClick={handleMobileMenuToggle}>
        <Hamburger toggled={isMobileMenuOpen} />
      </div>
    </nav>
  )
}

export default Navbar
