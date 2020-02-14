import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const EmailContact = () => {
    return (
        <section>
            <Title title="Contattaci" subtitle="ora" />
            <div c>
                <form   
                    action="https://formspree.io/studioassociatofusignani@gmail.com" 
                    method="POST"
                    className={styles.form}>
                    <div>
                        <label htmlFor="name">nome</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="Il tuo nome" />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input  
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="email@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message">Messaggio</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className={styles.formControl}
                            placeholder="La tua richiesta"/>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Invia"
                            className={styles.submit} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailContact
