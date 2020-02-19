import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

const RichTextDisplay = ({ json }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            {/* <h3>this is awesome image</h3> */}
            <img
              className="content-image"
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt={""}
            />
            {/* <p>images provided by john doe</p> */}
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        return (
          <div>
            <h1>Related article: {title["en-US"]}</h1>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt={title}
            />
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }

  return (
    <RichTextWrapper>
      {documentToReactComponents(json, options)}
    </RichTextWrapper>
  )
}

const RichTextWrapper = styled.div`
  word-break: break-all;

  .content-image {
    display: block;
    margin: 0 auto;
  }
`

export default RichTextDisplay
