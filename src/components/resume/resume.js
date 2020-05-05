import React from "react"

import ColoredSection from "../colored-section"
import { useStaticQuery, graphql } from "gatsby"
import ResumeSection from "./resume-section"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      education: allEducationJson {
        nodes {
          title
          location
          institution
          period
          description
          icon {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      experience: allExperienceJson {
        nodes {
          title
          location
          institution
          period
          description
          icon {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ColoredSection title="resume" backgroundColor="#52796f" color="#ffffff">
      <ResumeSection title="Education" items={data.education.nodes} />
      <ResumeSection title="Experience" items={data.experience.nodes} />
    </ColoredSection>
  )
}

export default Resume
