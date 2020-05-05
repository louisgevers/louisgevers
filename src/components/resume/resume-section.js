import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"

const StyledHeader = styled.h3`
  color: #cad2c5;
  text-align: start;
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  margin-top: 1em;
`

const StyledEntryGrid = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  color: black;
  margin-top: 20px;
  margin-bottom: 40px;
`
const EntryTitle = styled.h4`
  grid-area: title;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`

const EntryInstitution = styled.h5`
  grid-area: institution;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`

const EntryDescription = styled.p`
  grid-area: description;
  display: none;
`

const EntryLocation = styled.span`
  grid-area: location;
  font-size: 14px;
  font-weight: 600;
  color: #84a98c;
  .material-icons {
    font-family: "Material Icons";
    font-size: 14px;
    margin-right: 0.1em;
  }
`

const EntryPeriod = styled.span`
  grid-area: period;
  margin: 0;
  margin-bottom: 1em;
  font-weight: 300;
  font-size: 14px;
`

const EntryIcon = styled(Img)`
  grid-area: icon;
  display: none;
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
    <EntryIcon fluid={iconFluid} />
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
  </div>
)

export default ResumeSection
