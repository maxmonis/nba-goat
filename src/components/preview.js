import React from "react"
import Image from "gatsby-image"

const Preview = ({ player }) => {
  const { title, content, image } = player
  return (
    <div>
      <Image fluid={image.fluid} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Preview
