import React from "react"
import PropTypes from "prop-types"
import Script from "./components/Script"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <Script
          innerHTMLCode={`
                function appendScript(url) {
                    var element = document.createElement("script");
                    element.src = url;
                    document.body.appendChild(element);
                }

                function downloadJSAtOnload() {
                    appendScript("https://cdnjs.cloudflare.com/ajax/libs/quicklink/2.0.0-alpha/quicklink.umd.js")
                    window.addEventListener('load', () => quicklink.listen());
                    appendScript("https://unpkg.com/website-carbon-badges@^1/b.min.js")
                }
                if (window.addEventListener)
                    window.addEventListener("load", downloadJSAtOnload, false);
                else if (window.attachEvent)
                    window.attachEvent("onload", downloadJSAtOnload);
                else window.onload = downloadJSAtOnload;
            `}
          defer
        />
        <script></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
