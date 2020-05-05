import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"

const StyledHeader = styled.h3`
  color: #cad2c5;
  text-align: start;
  font-weight: 300;
  font-size: 24px;
`

const ResumeEntry = ({
  title,
  institution,
  description,
  location,
  period,
  iconFluid,
}) => (
  <div>
    <Img fluid={iconFluid} />
    <h4>{title}</h4>
    <h5>{institution}</h5>
    <p>{description}</p>
    <span>{location}</span>
    <span>{period}</span>
  </div>
)

const ResumeSection = ({ title, items }) => {
  console.log(items)
  items.forEach(item => console.log(item.icon))
  return (
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
}

export default ResumeSection
