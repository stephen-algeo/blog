/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Row from "./row"

import favicon from "../images/favicon-32x32.png"
import "./layout.css"
import "./blog.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link rel="icon" href={favicon} />
      <Row>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Row>
      {children}
      <Row>
        <footer>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </footer>
      </Row>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
