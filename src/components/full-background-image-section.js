import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import { StyledFullScreenWrapper } from "./shared-styled-components"

const FullBackground = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "home-background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4996) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.file.childImageSharp.fluid

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage Tag="section" className={className} fluid={imageData}>
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const FullBackgroundImageSection = styled(FullBackground)`
  width: 100%;
  height: 100vh;
`

export default FullBackgroundImageSection
