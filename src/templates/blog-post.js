import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Prism, { languages } from "prismjs"

export default ({ data }) => {
  useEffect(() => {
    languages.go = {
      keyword: /\b(const|go|for|import|var|func|type|struct|string|int|float64|bool)\b/,
      comment: /\/\/.*/,
      operator: /(:=|=|<|>|return)/,
      punctuation: /[(){}[],]/,
      number: /\b\d+\.?\d*/,
    }
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const post = data.markdownRemark
  return (
    <Layout>
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
