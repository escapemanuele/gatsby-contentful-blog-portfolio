import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const EmailContact = () => {
  return (
    <section>
      <Title title="Contact us" subtitle="now" />
      <div c>
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
              data-cy="form-name"
              className={styles.formControl}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              data-cy="form-email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              data-cy="form-message"
              className={styles.formControl}
              placeholder="Your request"
            />
          </div>
          <div>
            <input type="submit" value="Send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default EmailContact
