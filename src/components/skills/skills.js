import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ColoredSection from "../colored-section"
import { StyledHeader } from "../shared-styled-components"
import Interests from "./interests"
import Tools from "./tools"

const CenteredStyledHeader = styled(StyledHeader)`
  text-align: center;
`

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
      tools: allToolsJson {
        nodes {
          title
          items {
            name
            icon
            experienced
          }
        }
      }
    }
  `)
  return (
    <ColoredSection title="Skills" backgroundColor="#216869" color="#ffffff">
      <CenteredStyledHeader>My areas of interest</CenteredStyledHeader>
      <Interests items={data.interests.nodes} />
      <CenteredStyledHeader>Tools I use</CenteredStyledHeader>
      <Tools items={data.tools.nodes} />
    </ColoredSection>
  )
}

export default Skills
