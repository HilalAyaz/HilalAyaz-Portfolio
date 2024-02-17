import React from 'react'

const Footer = () => {
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
  const dotContainer={
    marginLeft: '10px',

  }

  const dotsStyle = {
    display: 'inline-block', 
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'blueviolet', 
    marginLeft: '10px',
    left: '10px',

  }

  const lineStyle = {
    backgroundColor: 'blueviolet', 
    width: '300px',
    height: ' 4px',
    borderRadius: '30px'
  }

  return (
    <footer style={{ ...footerStyle }}>
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
