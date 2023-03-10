'use client'

import { useState } from 'react'
import styles from './contact.module.css'

function ContactForm() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setLastName('')
    setEmail('')
    setSubject('')
    setMessage('')
    // Send the email somehow??
  }

  return (
    <form onSubmit={handleSubmit} className={styles.fromContainer}>
      <div className={styles.contactRow}>
        <label className={styles.contactLabel}>
          Name*
          <input
            type="text"
            value={name}
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className={styles.contactLabel}>
          <input
            type="text"
            value={lastName}
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </div>

      <div className={styles.contactRow}>
        <label className={styles.contactLabel}>
          Subject*
          <input
            type="text"
            value={subject}
            placeholder="Your subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <label className={styles.contactLabel}>
          Email*
          <input
            type="email"
            value={email}
            placeholder="hello@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <label className={styles.contactLabel}>
        Message*
        <textarea
          className={styles.contactTextArea}
          value={message}
          placeholder="Hello.."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button className={styles.contactBtn} type="submit">
        Send
      </button>
    </form>
  )
}

export default ContactForm
