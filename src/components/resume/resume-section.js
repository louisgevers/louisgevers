import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"
import {
  StyledHeader,
  UnstyledUnorderedList,
} from "../shared-styled-components"

const StyledEntryGrid = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  color: black;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 100px 1fr 30%;
    grid-template-rows: auto;
    grid-template-areas:
      "icon title location"
      "icon institution period"
      "icon description .";
  }
`
const EntryTitle = styled.h4`
  grid-area: title;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const EntryInstitution = styled.h5`
  grid-area: institution;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-weight: 400;
  }
`

const EntryDescription = styled.p`
  grid-area: description;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

const EntryLocation = styled.span`
  grid-area: location;
  font-size: 14px;
  font-weight: 600;
  color: #216869;
  .material-icons {
    font-family: "Material Icons";
    font-size: 14px;
    margin-right: 0.1em;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    .material-icons {
      font-size: 18px;
    }
  }
  @media (min-width: 1024px) {
    text-align: end;
  }
`

const EntryPeriod = styled.span`
  grid-area: period;
  margin: 0;
  margin-bottom: 1em;
  font-weight: 300;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    text-align: end;
  }
`

const EntryIcon = styled.div`
  grid-area: icon;
  display: none;
  @media (min-width: 1024px) {
    display: block;
    padding: 1em;
  }
`

const ResumeEntry = ({
  title,
  institution,
  description,
  location,
  period,
  iconFluid,
}) => (
  <StyledEntryGrid>
    <EntryIcon>
      <Img fluid={iconFluid} />
    </EntryIcon>
    <EntryTitle>{title}</EntryTitle>
    <EntryPeriod>{period}</EntryPeriod>
    <EntryInstitution>{institution}</EntryInstitution>
    <EntryLocation>
      <span className="material-icons">location_on</span>
      {location}
    </EntryLocation>
    <EntryDescription>{description}</EntryDescription>
  </StyledEntryGrid>
)

const ResumeSection = ({ title, items }) => (
  <div>
    <StyledHeader>{title}</StyledHeader>
    <UnstyledUnorderedList>
      {items.map(item => (
        <ResumeEntry
          key={item.title}
          title={item.title}
          institution={item.institution}
          description={item.description}
          location={item.location}
          period={item.period}
          iconFluid={item.icon.childImageSharp.fluid}
        />
      ))}
    </UnstyledUnorderedList>
  </div>
)

export default ResumeSection
