import styled from "styled-components"

const ContactFormWrapper = styled.form`
  .formControl,
  .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid ${props => props.theme.darkGrey};
    border-radius: 0.25rem;
  }

  .submit {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    color: ${props => props.theme.mainWhite};
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
  }

  .submit:hover {
    background: ${props => props.theme.darkGrey};
    color: ${props => props.theme.mainBlack};
    border-color: ${props => props.theme.darkGrey};
  }
`

export default ContactFormWrapper
