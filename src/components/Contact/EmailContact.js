import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

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
              placeholder={strings.namePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder={strings.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder={strings.messagePlaceholder}
            />
          </div>
          <div>
            <input type="submit" value={strings.submitText} className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export const strings = {
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    submitText: "Submit"
};

export default EmailContact
