import React from "react"
import { blue300 } from "../theme"

const Row = ({ color = blue300, children }) => (
  <section className="row" style={{ backgroundColor: color }}>
    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      {children}
    </div>
  </section>
)

export default Row
