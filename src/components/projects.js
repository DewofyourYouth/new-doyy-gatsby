import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "images/proj" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      image: file(relativePath: { eq: "images/drink.jpg" }) {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.images.nodes[0])
  return (
    <section>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Projects</h1>
      <div id="projects-grid">
        <Project
          images={data.images}
          imageName="wines"
          projectName="Project One"
        >
          <p>Hello!</p>
          <p>This is some text about a project.</p>
        </Project>
        <Project
          images={data.images}
          imageName="beer-barrel"
          projectName="Project Two"
        >
          <p>Hi Mom! Do you like my project?</p>
        </Project>
      </div>
    </section>
  )
}

export default Projects
