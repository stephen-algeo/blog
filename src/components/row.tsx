import React from "react"

const Row = ({ color = "#fff", children }) => (
  <section className="row" style={{ backgroundColor: color }}>
    <div className="row-content">{children}</div>
  </section>
)

export default Row
