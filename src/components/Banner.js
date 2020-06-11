import React from "react"
import { BannerWrapper } from "../css"

const Banner = ({ title, info, children }) => {
  return (
    <BannerWrapper>
      <p>{info}</p>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  )
}

export default Banner
