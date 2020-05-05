import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  color: ${props => props.color};
  text-align: center;
  background: ${props => props.backgroundColor};
  padding: 40px 20px;
  hr {
    width: 80%;
  }
`

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1280px) {
    width: 50%;
  }
`

const StyledHeader = styled.h2`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 400;
`

const ColoredSection = ({ children, title, backgroundColor, color }) => (
  <StyledSection backgroundColor={backgroundColor} color={color}>
    <StyledContentWrapper>
      <StyledHeader>{title}</StyledHeader>
      <hr></hr>
      {children}
    </StyledContentWrapper>
  </StyledSection>
)

export default ColoredSection
