import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const Error = () => {
  return (
    <Layout>
      <ErrorWrapper>
        <Banner title="Page not found">
          <Link to="/" className="btn-white">
            Go back
          </Link>
        </Banner>
      </ErrorWrapper>
    </Layout>
  )
}

const ErrorWrapper = styled.header`
  background: ${props => props.theme.primaryColor};
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Error
