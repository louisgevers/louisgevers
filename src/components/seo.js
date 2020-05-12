import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
          url
        }
      }
    }
  `)
  return (
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        { name: `description`, content: site.siteMetadata.description },
        // Open Graph / Facebook
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: site.siteMetadata.url },
        { property: `og:title`, content: site.siteMetadata.title },
        { property: `og:description`, content: site.siteMetadata.description },
        { property: `og:image`, content: site.siteMetadata.image },
        // Twitter
        { property: `twitter:card`, content: `summary_large_image` },
        { property: `twitter:url`, content: site.siteMetadata.url },
        { property: `twitter:title`, content: site.siteMetadata.title },
        {
          property: `twitter:description`,
          content: site.siteMetadata.description,
        },
        { property: `twitter:image`, content: site.siteMetadata.image },
      ]}
    />
  )
}

export default SEO
