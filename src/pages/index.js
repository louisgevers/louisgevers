import React from "react"

import Layout from "../components/layout"
import Home from "../components/home/home"
import About from "../components/about/about"
import Resume from "../components/resume/resume"
import Skills from "../components/skills/skills"

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Resume />
    <Skills />
  </Layout>
)

export default IndexPage
