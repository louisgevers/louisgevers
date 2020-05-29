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
          }
        }
      }
    }
  `)
  return (
    <div id="skills">
      <ColoredSection title="Skills" backgroundColor="#216869" color="#ffffff">
        <CenteredStyledHeader>What I have to offer</CenteredStyledHeader>
        <Interests items={data.interests.nodes} />
        <CenteredStyledHeader>My main tools</CenteredStyledHeader>
        <Tools items={data.tools.nodes} />
      </ColoredSection>
    </div>
  )
}

export default Skills
