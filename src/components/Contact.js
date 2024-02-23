import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Contact.css'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xayrjndb')

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
              cols='40'
              rows='10'
              placeholder='Type your message here...'
              name='message'
            ></textarea>
          </div>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <div>
            <button
              className='contact-submit'
              type='submit'
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </form>
      </motion.section>
      {state.succeeded && (
        <p>Thank you for your message! We will get back to you soon.</p>
      )}
    </motion.div>
  )
}

export default ContactForm
