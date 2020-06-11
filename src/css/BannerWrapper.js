import styled from "styled-components"

const BannerWrapper = styled.div`
  text-align: right;
  letter-spacing: ${props => props.theme.mainSpacing};
  color: ${props => props.theme.mainBlack};

  h1 {
    background: rgba(255, 255, 255, 0.9);
    font-family: "Rubik", Sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0px;
    text-shadow: 12px 4px 71px rgba(117, 117, 117, 0.3);
    margin-bottom: 2rem;
  }

  p {
    background: rgba(255, 255, 255, 0.9);
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      width: 70%;
    }
  }
`

export default BannerWrapper
