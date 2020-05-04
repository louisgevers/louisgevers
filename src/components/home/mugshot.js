import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const avatarImageStyle = {
  borderRadius: `50%`,
  border: `6px solid white`,
  width: `100%`,
  height: `100%`,
}

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px 0;
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1024px) {
    width: 275px;
    height: 275px;
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }
`

const MugShot = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mugshot.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 372, maxHeight: 372) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Avatar>
      <Img fluid={data.file.childImageSharp.fluid} style={avatarImageStyle} />
    </Avatar>
  )
}

export default MugShot
