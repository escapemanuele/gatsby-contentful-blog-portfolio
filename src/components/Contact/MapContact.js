import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="Join us" subtitle="in studio" />
      <MapWrapper>
        <iframe
          title="change-maps"
          frameBorder="0"
          width="100%"
          height="350px"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Via%20oriani%2022%20Cervia&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          aria-label="Via oriani 22 Cervia"
        ></iframe>
      </MapWrapper>
    </section>
  )
}

const MapWrapper = styled.div`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`

export default MapContact
