import React from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import styles from '../css/error.module.css'
import Anilink from "gatsby-plugin-transition-link/AniLink";

const Error = () => {

    return (
        <Layout>
            <header className={styles.error}>
                <Banner
                    title="Pagina non trovata">
                        <Anilink fade to="/" className="btn-white">Torna alla pagina principale</Anilink>
                    </Banner>
            </header>
        </Layout>
    )
}

export default Error