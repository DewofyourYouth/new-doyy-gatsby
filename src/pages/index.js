import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Dew of your Youth</h1>
    <p>Let's make something great together.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/about/">About DOYY</Link>
    <Projects />
  </Layout>
)

export default IndexPage
