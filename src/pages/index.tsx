import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/row"
import { blue100, blue200, blue300, pink } from "../theme"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <section>
        <h2>Hi, I'm Stephen Algeo.</h2>
        <p>I'm a Software Engineer and Property Investor.</p>
        <p>
          I use mine and other people's money to buy refurbish and hold property
          in Leeds and Liverpool.
        </p>
      </section>
    </Row>

    <Row color={blue100}>
      <h2>Stuff I do</h2>
      <ul>
        <li>Auctions</li>
        <li>Buy to let</li>
        <li>Private Finance</li>
      </ul>
    </Row>

    <Row color={blue200}>
      <h2>Meetup</h2>
      <p>I host a monthly meetup for property investors in Yorkshire</p>
    </Row>
    <Row color={blue300}>
      <h2>Contact</h2>
      <p>email: stephen.algeo@gmail.com</p>
      <p>tel: 07929 854 171</p>
    </Row>
    <Row color={pink}>
      <h2>Blog</h2>
      <p>Writings and rants click here</p>
    </Row>
    <Row>
      <h2>Acredited memberships</h2>
      12345
    </Row>
  </Layout>
)

export default IndexPage
