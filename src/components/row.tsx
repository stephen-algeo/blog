import React from "react"

const Row = ({ children }) => (
  <section className="row">
    <div className="row-content">{children}</div>
  </section>
)

export const TitleRow = ({ children }) => (
  <section className="row" style={{ backgroundColor: "#F7F7F7" }}>
    <div className="title-content">{children}</div>
  </section>
)

export default Row
