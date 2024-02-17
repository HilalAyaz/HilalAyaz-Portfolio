import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Contact.css'

const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    // form submission handling
  }

  return (
    <motion.div
      className='contact-container glass-effect'
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h3
        className='contact-header'
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Talk
      </motion.h3>
      <motion.section
        className='contact-form'
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <form onSubmit={handleSubmit}>
          <div className='contact-input-container'>
            <input
              className='contact-input name'
              size='40'
              placeholder="What's your name?"
              type='text'
              name='name'
            />
            <input
              className='contact-input'
              size='40'
              placeholder='Your Email?'
              type='email'
              name='email'
            />
          </div>
          <div>
            <textarea
              className='contact-textarea'
              disabled
              cols='40'
              rows='10'
              placeholder='Apologies, the form submission feature is currently unavailable. I am working to integrate it soon.'
              name='message'
            ></textarea>
          </div>
          <div>
            <button className='contact-submit' type='submit' disabled>
              Send message
            </button>
          </div>
        </form>
      </motion.section>
    </motion.div>
  )
}

export default ContactForm
