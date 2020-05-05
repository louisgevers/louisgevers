import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const imageStyle = {
  filter: `brightness(70%)`,
}

const SectionBreakBackground = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "section-break.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4996) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="div"
      className={className}
      fluid={imageData}
      style={imageStyle}
    />
  )
}

const SectionBreak = styled(SectionBreakBackground)`
  width: 100%;
  height: 200px;
`

export default SectionBreak
