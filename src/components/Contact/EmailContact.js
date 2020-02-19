import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
import { emailStrings } from "./ContactStrings"

const EmailContact = () => {
  return (
    <section>
      <Title title="Contact us" subtitle="now" />
      <div>
        <form
          action="https://formspree.io/..."
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder={emailStrings.namePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder={emailStrings.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder={emailStrings.messagePlaceholder}
            />
          </div>
          <div>
            <input
              type="submit"
              value={emailStrings.submitText}
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default EmailContact
