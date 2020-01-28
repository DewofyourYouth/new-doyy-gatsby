import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="Dew of your Youth: Blog"
        description="The ramblings of Jacob Shore"
      />
      <div>
        <h1>This is the blog page</h1>
      </div>
    </Layout>
  )
}

export default Blog
