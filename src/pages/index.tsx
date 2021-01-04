import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/row"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug} className="post-link">
      {`=> ${post.frontmatter.title}`}
    </Link>
  </div>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <Row>
      {edges.map(edge => (
        <div className="post-link-wrapper">
          <PostLink key={edge.node.id} post={edge.node} />
        </div>
      ))}
    </Row>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
