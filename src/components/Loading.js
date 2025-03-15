import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Loader () {
  const containerAnimationControls = useAnimation()

  useEffect(() => {
    const animateContainers = async () => {
      // Animate the v-container
      await containerAnimationControls.start({
        transition: { duration: 1.5, delay: 0.7 }
      })

      await containerAnimationControls.start({
        y: 0,
        transition: { duration: 1, delay: 0.6 }
      })

      await containerAnimationControls.start({
        opacity: 0,
        transition: { duration: 1, delay: 0.4 }
      })
    }

    animateContainers()
  }, [containerAnimationControls])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        textAlign: 'center'
      }}
    >
      <motion.div
        className='v-container'
        animate={containerAnimationControls}
        initial={{ y: 800, opacity: 1 }}
        style={{ width: '100%', maxWidth: '600px' }} 
      >
        <h6
          style={{
            fontSize: 'clamp(28px, 15vw, 110px)',
            color: 'gray',
            margin: 0,
            letterSpacing: '2.5px',
            textTransform :'uppercase'
            
          }}
        >
          {' '}
          <motion.span initial={{ y: '100%' }}>Hilal</motion.span>
          <motion initial={{ y: '100%' }}>Ayaz</motion>
        </h6>
      </motion.div>
    </div>
  )
}
