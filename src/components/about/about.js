import React from "react"
import styled from "styled-components"

import { TextParagraph } from "../shared-styled-components"
import FlagIcons from "./flag-icons"

const StyledSection = styled.section`
  color: white;
  text-align: center;
  background: #84a98c;
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

const About = () => (
  <StyledSection>
    <StyledContentWrapper>
      <StyledHeader>About me</StyledHeader>
      <hr />
      <TextParagraph>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
          velit dignissim sapien pulvinar, mollis molestie massa varius. Donec
          nec sapien neque. Donec sagittis lacus in lorem tristique, in mattis
          sem eleifend. Duis mauris nisi, volutpat non lacus vel, vestibulum
          commodo nisi. Nullam vel elit convallis, viverra lacus non,
          scelerisque enim. Mauris sit amet tristique arcu. Ut ut accumsan
          dolor.
        </p>
      </TextParagraph>
      <FlagIcons />
    </StyledContentWrapper>
  </StyledSection>
)

export default About
