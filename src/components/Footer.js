import React from 'react'
import Anilink from "gatsby-plugin-transition-link/AniLink";
import links from '../constants/links'
 import styles from '../css/footer.module.css'

const Footer = () => {

    const linkProfilo = process.env.LINK_URL || 'https://www.linkedin.com/in/ebuccelli/';
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return (
                        <Anilink fade key={index} to={item.path}>
                            {item.text}
                        </Anilink>
                    )
                })}
            </div>
            {/* <div className={styles.icons}>
                {SocialIcons.map((item,index) => {
                    return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                })}
            </div> */}
            <div className={styles.copyright}>
                copyright &copy; Studio Associato Fusignani {new Date().getFullYear()} Tutti i diritti riservati
            </div>
            <div className={styles.copyright}>
                Viale Oriani A. 22 - 48015 Cervia (RA)  - PARTITA IVA: 00689140390
            </div>
            <div className={styles.created}>
                Creato da <a href={linkProfilo}>Emanuele Buccelli</a>
            </div>
        </footer>
    )
}

export default Footer