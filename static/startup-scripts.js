function injectScript(src) {
    return new Promise((resolve, reject) =>  {
        const script = document.createElement("script");
        script.async = true;
        script.src = src;
        script.addEventListener("load", resolve);
        script.addEventListener("error", () => reject(`Error loading script: ${src}`));
        script.addEventListener("abort", () => reject(`Script loading abort: ${src}`));
        document.body.appendChild(script);
    })
}

function downloadWhatIsNeeded() {
    injectScript("https://cdnjs.cloudflare.com/ajax/libs/quicklink/2.0.0-alpha/quicklink.umd.js").then(() => {
        quicklink.listen()
    })
    injectScript("https://unpkg.com/website-carbon-badges@^1/b.min.js");
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
}

if (window.addEventListener) {
  window.addEventListener("load", downloadWhatIsNeeded, false);
}
else if (window.attachEvent)
    window.attachEvent("onload", downloadWhatIsNeeded);
else window.onload = downloadWhatIsNeeded;