import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/row"
import { light } from "../theme"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      {/* <div className="blog-container"> */}
      <section
        className="row blog-container"
        style={{ backgroundColor: light }}
      >
        <div className="col-12 col-md-10 offset-md-1 col-lg-4 offset-lg-4">
          <h2>{frontmatter.title}</h2>
          <h3>{frontmatter.date}</h3>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
      {/* </div> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
