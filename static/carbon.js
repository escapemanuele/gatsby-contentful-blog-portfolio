// const url = encodeURIComponent(window.location.href);
const url = "https://staging-gatsby-contenful-portfolio-blog.netlify.app/";

const renderResult = (e) => {
    const result = e.c + "g of CO<sub>2</sub>/view";
    console.log("RESULTRENDER", result);
    const badge = document.getElementById('wcb');
    console.log("BADGE", badge)
    
    badge.innerHTML = result;
    // $q("wcb_g").innerHTML = e.c + "g of CO<sub>2</sub>/view", $q("wcb_2").insertAdjacentHTML("beforeEnd", "Cleaner than " + e.p + "% of pages tested")
}

const newRequest = (e = !0) => {
    fetch("https://api.websitecarbon.com/b?url=" + url)
	.then(e => {
        if (!e.ok) throw Error(e)
        return e.json();
	}).then(json => {
        e && renderResult(json), json.t = (new Date).getTime(), localStorage.setItem("wcb_" + url, JSON.stringify(json))
    }).catch((function(e) {
        //$q("wcb_g").innerHTML = "No Result", console.log(e), localStorage.removeItem("wcb_" + url)
    }))
}

if ("fetch" in window) {
    let e = localStorage.getItem("wcb_" + url);
    const n = new Date().getTime()
    if (e) {
        const t = JSON.parse(e)
        console.log("JSON", t)
        renderResult(t), n - t.t > 864e5 && newRequest(!1)
    } else newRequest()
}









    /*
  const $q = e => document.getElementById(e),
  url = encodeURIComponent(window.location.href),
  newRequest = function(e = !0) {
      fetch("https://api.websitecarbon.com/b?url=" + url).then((function(e) {
          if (!e.ok) throw Error(e);
          return e.json()
      })).then((function(n) {
          e && renderResult(n), n.t = (new Date).getTime(), localStorage.setItem("wcb_" + url, JSON.stringify(n))
      })).catch((function(e) {
          $q("wcb_g").innerHTML = "No Result", console.log(e), localStorage.removeItem("wcb_" + url)
      }))
  },
  renderResult = function(e) {
      $q("wcb_g").innerHTML = e.c + "g of CO<sub>2</sub>/view", $q("wcb_2").insertAdjacentHTML("beforeEnd", "Cleaner than " + e.p + "% of pages tested")
  },
  css = "<style>.carbonbadge{--b1:#0e11a8;--b2:#00ffbc;font-size:15px;line-height:1.15;text-align:center;color:var(--b1)}.carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:.7em}.carbonbadge a,.carbonbadge p{text-align:center;display:inline-flex;justify-content:center;align-items:center;font-size:1em;margin:.2em 0;line-height:1.15;font-family:-apple-system,BlinkMacSystemFont,sans-serif}#wcb_g,.carbonbadge a{padding:.3em .5em;background:#fff;border:.13em solid var(--b2);border-radius:.3em 0 0 .3em}#wcb_g{border-right:0;min-width:8.2em}.carbonbadge a{border-radius:0 .3em .3em 0;border-left:0;background:var(--b1);color:#fff;text-decoration:none;font-weight:700;border-color:var(--b1)}.wcb-d #wcb_2{color:#fff}.carbonbadge.wcb-d a{color:var(--b1);background:var(--b2);border-color:var(--b2)}</style>",
  badge = $q("wcb");
if ("fetch" in window) {
  badge.insertAdjacentHTML("beforeEnd", css), badge.insertAdjacentHTML("beforeEnd", '<div id="wcb_p"><p id="wcb_g">Measuring CO<sub>2</sub>&hellip;</p><a target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</a></div><p id="wcb_2"></p>');
  let e = localStorage.getItem("wcb_" + url);
  const n = (new Date).getTime();
  if (e) {
      const t = JSON.parse(e);
      renderResult(t), n - t.t > 864e5 && newRequest(!1)
  } else newRequest()
}
*/