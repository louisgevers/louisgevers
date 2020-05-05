import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ColoredSection from "../colored-section"
import { StyledHeader } from "../shared-styled-components"
import Interests from "./interests"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      interests: allInterestsJson {
        nodes {
          title
          description
          materialIconName
          color
        }
      }
    }
  `)
  return (
    <ColoredSection title="Skills" backgroundColor="#216869" color="#ffffff">
      <StyledHeader>My areas of interest</StyledHeader>
      <Interests items={data.interests.nodes} />
      <StyledHeader>Tools I use</StyledHeader>
    </ColoredSection>
  )
}

export default Skills
