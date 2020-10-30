import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { light } from "../theme"

const Header = ({ siteTitle }) => (
  <header>
    <section className="">
      <h1>
        <Link
          to="/"
          style={{
            color: light,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
