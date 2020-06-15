import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"

const CarbonBadge = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [carbon, setCarbon] = useState({})

  const getData = url => {
    fetch("https://api.websitecarbon.com/b?url=" + url)
      .then(res => {
        if (!res.ok) throw Error(res)
        return res.json()
      })
      .then(json => {
        json.t = new Date().getTime()
        localStorage.setItem("wcb_" + url, JSON.stringify(json))
        setCarbon(json)
      })
      .catch(err => {
        setCarbon({
          error: "No result",
        })
      })
  }

  useEffect(() => {
    const url = encodeURIComponent(window.location.href)
    const localCarbon = localStorage.getItem("wcb_" + url)
    if (localCarbon) {
      const n = new Date().getTime()
      const t = JSON.parse(localCarbon)
      if (n - t.t > 864e5) {
        getData(url)
      } else {
        setCarbon(t)
      }
    } else {
      getData(url)
    }
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <CarbonWrapper>
      {carbon.error ? (
        <div className="error">{carbon.error}</div>
      ) : (
        <div className="success">
          <span>
            {carbon.c}g of CO<sub>2</sub>/view
          </span>
          <div>Cleaner than {carbon.p}% of pages tested!</div>
        </div>
      )}
    </CarbonWrapper>
  )
}

const CarbonWrapper = styled.div`
  display: inline-block;
  font-weight: 600;
  margin-top: 1rem;

  .success {
    border-radius: 5px;
    margin: 0 auto;

    span {
      background: ${props => props.theme.mainWhite};
      border: 2px solid ${props => props.theme.ecoGreen};
      color: ${props => props.theme.ecoGreen};
      display: block;
      padding: 0.5rem;
    }

    div {
      background: ${props => props.theme.ecoGreen};
      color: ${props => props.theme.mainWhite};
      padding: 0.3rem 0.5rem;
    }
  }
`

export default CarbonBadge
