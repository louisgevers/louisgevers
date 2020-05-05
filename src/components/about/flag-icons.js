import React from "react"
import styled from "styled-components"

import French from "../../assets/fr.svg"
import Dutch from "../../assets/nl.svg"
import English from "../../assets/gb.svg"

const StyledParagraph = styled.p`
  font-size: 16px;
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

const StyledFlagWrapper = styled.div`
  width: 50px;
  height: 50px;
`

const StyledHeader = styled.h4`
  margin: 2px;
  font-size: 20px;
  font-weight: 400;
`

const StyledDescription = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #eeeeee;
`

const FlagIcons = () => (
  <>
    <StyledParagraph>I am fluent in the following languages:</StyledParagraph>
    <StyledList>
      <StyledItem>
        <StyledFlagWrapper>
          <French />
        </StyledFlagWrapper>
        <StyledHeader>French</StyledHeader>
        <StyledDescription>Mother tongue</StyledDescription>
      </StyledItem>
      <StyledItem>
        <StyledFlagWrapper>
          <Dutch />
        </StyledFlagWrapper>
        <StyledHeader>Dutch</StyledHeader>
        <StyledDescription>
          Education up until university, daily use
        </StyledDescription>
      </StyledItem>
      <StyledItem>
        <StyledFlagWrapper>
          <English />
        </StyledFlagWrapper>
        <StyledHeader>English</StyledHeader>
        <StyledDescription>Academic level, daily use</StyledDescription>
      </StyledItem>
    </StyledList>
  </>
)

export default FlagIcons
