import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Stephen Algeo.</h1>
    <p>I'm a Software Engineer and Property Investor.</p>
    <p>
      I use mine and other people's money to buy refurbish and hold property in
      Leeds and Liverpool.
    </p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default IndexPage
