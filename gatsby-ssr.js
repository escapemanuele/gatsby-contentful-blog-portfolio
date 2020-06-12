import React from "react"
import { withPrefix } from "gatsby"

//https://www.srihash.org/ to get sha
//https://unpkg.com/website-carbon-badges@^1/b.min.js
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://unpkg.com/website-carbon-badges@^1/b.min.js"
      src={withPrefix('carbon.js')}
      defer
    />,
  ])
}
