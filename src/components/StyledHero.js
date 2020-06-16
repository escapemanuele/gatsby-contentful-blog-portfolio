import React from "react"
import styled from "styled-components"
import Image from "./Image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    // <BackgroundImage className={className} fluid={img}>
    //   {children}
    // </BackgroundImage>
    <Image className={className} fluid={img} />
  )
}

export default styled(StyledHero)`
    height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
    /* background: ${props =>
      props.home
        ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
        : "none"}; */
    background-position: center;
    background-size: cover;
    opacity: 1!important;
    display: flex;
    justify-content:start;
    align-items:center;

`
