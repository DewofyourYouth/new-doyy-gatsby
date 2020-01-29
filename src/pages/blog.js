import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Dew of your Youth: Blog" description="The ramblings." />
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Blog
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span style={{ fontSize: ".9rem" }}>
                  — {node.frontmatter.author}, {node.frontmatter.date}
                </span>
              </h3>{" "}
            </Link>{" "}
            <div>
              categories:
              {node.frontmatter.categories.map((c, i) => (
                <span class="category" key={i}>
                  {" "}
                  {c}
                  {i < node.frontmatter.categories.length - 1 ? "," : ""}{" "}
                </span>
              ))}
            </div>
            <br />
            <p>{node.excerpt}</p>
          </article>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            categories
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
