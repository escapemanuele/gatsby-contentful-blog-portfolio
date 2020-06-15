import React from "react"
import Title from "../Title"
import { ContactFormWrapper } from "../../css"
import { emailStrings } from "./ContactStrings"

const EmailContact = () => {
  return (
    <section>
      <Title title="Contact us" subtitle="now" />
      <ContactFormWrapper action="https://formspree.io/..." method="POST">
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="formControl"
            placeholder={emailStrings.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="formControl"
            placeholder={emailStrings.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            className="formControl"
            placeholder={emailStrings.messagePlaceholder}
          />
        </div>
        <div>
          <input
            type="submit"
            value={emailStrings.submitText}
            className="submit"
          />
        </div>
      </ContactFormWrapper>{" "}
    </section>
  )
}

export default EmailContact
