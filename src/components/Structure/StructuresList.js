import React from 'react'
import styled from 'styled-components';
import Card from '../Common/Card';
import PropTypes from 'prop-types'


const StructuresList = ({structures}) => {

    return (
        <StructuresWrapper>
            {structures && structures.map(node => {

                node.immagine = node.images? node.images[0] : null;
                return (
                    <Card key={node.id} node={node} />
                )
            } )}
        </StructuresWrapper>
    )
}

StructuresList.propTypes = {
    structures: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const StructuresWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;

    padding: 1rem;

    @media (min-width: 780px) {
        padding: 3rem;
    }
`

export default StructuresList