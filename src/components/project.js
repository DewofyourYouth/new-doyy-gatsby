import React from "react"
import Img from "gatsby-image"

const project = ({ images, imageName, projectName, children }) => {
  const image =
    images.nodes[images.nodes.findIndex(item => item.name === imageName)]
  return (
    <div className="project">
      <div className="project-header">
        <span className="proj-header">
          <Img fluid={image.childImageSharp.fluid} />
          <h1 className="proj-name">{projectName}</h1>
        </span>
      </div>
      <div className="proj-body" style={{ paddingTop: "10px" }}>
        {children}
      </div>
    </div>
  )
}

export default project
