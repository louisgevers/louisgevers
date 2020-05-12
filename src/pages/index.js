import React from "react"

import Layout from "../components/layout"
import Home from "../components/home/home"
import About from "../components/about/about"
import Resume from "../components/resume/resume"
import Skills from "../components/skills/skills"
import SectionBreak from "../components/section-break"
import Contact from "../components/contact/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
    <Resume />
    <Skills />
    <SectionBreak />
    <Contact />
  </Layout>
)

export default IndexPage
