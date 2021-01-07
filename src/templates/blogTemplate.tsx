import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row, { TitleRow } from "../components/row"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const featuredImgFluid = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid.src
    : undefined

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={featuredImgFluid}
        slug={frontmatter.slug}
      />
      <TitleRow>
        <h2 className="blog-title">{frontmatter.title}</h2>
      </TitleRow>
      <Row>
        <section className="row">
          <div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="/" className="regular-link">
              View more blog posts
            </Link>
          </div>
        </section>
      </Row>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
