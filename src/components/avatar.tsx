import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 20) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ height: "30px", width: "30px", marginRight: "2rem" }}>
      <Img
        style={{ borderRadius: "25px" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Avatar
