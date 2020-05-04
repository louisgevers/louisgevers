import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const avatarImageStyle = {
  borderRadius: `50%`,
  border: `6px solid white`,
  margin: `auto`,
}

const MugShot = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mugshot.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 200, height: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img fixed={data.file.childImageSharp.fixed} style={avatarImageStyle} />
  )
}

export default MugShot
