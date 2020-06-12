import React from 'react'

//https://www.srihash.org/ to get sha

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            key="https://unpkg.com/website-carbon-badges@^1/b.min.js"
            src="https://unpkg.com/website-carbon-badges@^1/b.min.js"
            integrity="sha384-jjFG+55isid1gyrw4cruyCVIQeIBVmgJczyc9x+X0vuarX4Fg1vpxMuNMl/lbidg"
            crossOrigin="anonymous"
            defer
        />
    ])
}