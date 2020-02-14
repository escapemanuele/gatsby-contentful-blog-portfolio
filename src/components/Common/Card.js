import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/it';

const Card = ({node}) => {

    const {indirizzo, titolo, immagine, data, categoria} = node

    var momentLocale = moment();
    momentLocale.locale('it');

    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <Image fluid={immagine.fluid} className={styles.img} alt="singolo articolo" style={{height: '100%'}} />
                <AniLink fade className={styles.link} to={`/${categoria.indirizzo}/${indirizzo}`}>
                    apri
                </AniLink>
                {data && <h6 className={styles.date}>{moment(data).format(`MMMM DD, YYYY`)}</h6>}
            </div>
            <div className={styles.footer}>
                <h4>{titolo}</h4>
            </div>
        </article>
    )
}

Card.propTypes = {
    node: PropTypes.shape({
        titolo: PropTypes.string.isRequired,
        indirizzo: PropTypes.string.isRequired,
        categoria: PropTypes.shape({
            indirizzo: PropTypes.string.isRequired
        }),
        immagine: PropTypes.object.isRequired,
    }),
}

export default Card
