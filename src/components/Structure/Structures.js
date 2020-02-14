import React from 'react'
import Title from '../Title'
import { graphql, useStaticQuery } from 'gatsby'
import StructuresList from './StructuresList';

const Structures = () => {

    const {structures} = useStaticQuery(getStructures);
    const structureNodes = structures.edges.map( x => x.node)
    return (
        <section>
             <Title title="I NOSTRI" subtitle="PROGETTI" />
             <StructuresList structures={structureNodes} />
        </section>
    )
}

const getStructures = graphql`
    {
        structures: allContentfulStruttura {
            edges {
                node {
                    id:contentful_id
                    indirizzo
                    titolo
                    images {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                    categoria {
                        indirizzo
                    }
                }
            }
        }
    }
`


export default Structures