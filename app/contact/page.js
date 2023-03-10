import ContactForm from './contactForm'
import styles from './contact.module.css'

export default function App() {
  return (
    <div className={styles.contactContainer}>
      <h1>Say Hello</h1>
      <div className={styles.formAndText}>
        <div className={styles.formText}>
          <p>
            Looking to start a new project or just want to say hi? Send me a
            email and i´ll do my best to replay within 24hrs!
          </p>
          <p>
            If contact forms arent´t your thing.. send me email at
            linnjdesign@gmail.com
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
