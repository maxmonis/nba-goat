import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Background = styled(BackgroundImage)`
  height: 700px;
`

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Greatest-NBA-All-Time-pp.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Background
      tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    ></Background>
  )
}

export default Image
