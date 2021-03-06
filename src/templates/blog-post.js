import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Prism, { languages } from "prismjs"

export default ({ data }) => {
  useEffect(() => {
    languages.go = {
      keyword: /\b(const|go|for|true|false|print|import|var|func|type|struct|string|int|float64|bool|\.)\b/,
      comment: /\/\/.*/,
      operator: /(:=|=|<|<=|>=|>|return)/,
      punctuation: /[(){}[],\.]/,
      number: /\b\d+\.?\d*/,
    }

    languages.python = {
      keyword: /\b(for|import|True|False|with)\b/,
      comment: /\/\/.*/,
      operator: /(:=|=|<|>|<=|>=|return)/,
      punctuation: /[(){}[],\.]/,
      number: /\b\d+\.?\d*/,
    }
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={"DOYY BLOG: " + post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`
