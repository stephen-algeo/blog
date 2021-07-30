import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/row"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug} className="post-link">
    <div>{post.frontmatter.title}</div>
  </Link>
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
        <div key={edge.node.id} className="post-link-wrapper">
          <PostLink post={edge.node} />
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
