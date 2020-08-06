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

                function downloadWhatIsNeeded() {
                    appendScript("https://unpkg.com/website-carbon-badges@^1/b.min.js")
                    // if ('serviceWorker' in navigator) {
                    //   navigator.serviceWorker.register('/sw.js');
                    // }
                }

                if (window.addEventListener) {
                  window.addEventListener("load", downloadWhatIsNeeded, false);
                }
                else if (window.attachEvent)
                    window.attachEvent("onload", downloadWhatIsNeeded);
                else window.onload = downloadWhatIsNeeded;
            `}
          defer
        />

        <Script src="quicklink.js" defer />
        <Script
          innerHTMLCode={`
            window.addEventListener('load', () => quicklink.listen());
          `}
        />
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
