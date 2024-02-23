import React, { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const footerStyle = {
    position: 'relative',
    width: '100%',
    marginTop: '40px',
    marginBottom: '20px',
    height: '40px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'blueviolet'
  }

  const dotContainer = {
    marginLeft: '10px'
  }

  const dotsStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'blueviolet',
    marginLeft: '10px',
    left: '10px'
  }

  const lineStyle = {
    backgroundColor: 'blueviolet',
    width: '300px',
    height: ' 4px',
    borderRadius: '30px'
  }

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1500 / 15) // Adjust the speed here (500 milliseconds in this example)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollTop
      const windowHeight = document.documentElement.clientHeight
      const scrollPercentage = (scrollHeight / windowHeight) * 100

      if (scrollPercentage > 60) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer style={{ ...footerStyle }}>
      {showScrollButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '20px',
            zIndex: '999',
            cursor: 'pointer'
          }}
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={32} color='blueviolet' />
        </div>
      )}
      <div style={dotContainer}>
        <span style={dotsStyle}></span>
        <span style={dotsStyle}></span>
        <span style={dotsStyle}></span>
      </div>
      <div
        style={{
          ...lineStyle
        }}
      ></div>
    </footer>
  )
}

export default Footer
