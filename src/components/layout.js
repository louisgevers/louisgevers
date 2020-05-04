import React from "react"
import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
