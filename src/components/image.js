import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Background = styled(BackgroundImage)`
  height: 1000px;
`

const Text = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.6),
    rgba(34, 49, 63, 0.6)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0 0 400px;
    @media (min-width: 992px) {
      font-size: 6rem;
    }
  }
`

const Image = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Background tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Text>
        <h1>Who gets your GOAT vote?</h1>
        <h3>Let's take a look at the candidates</h3>
      </Text>
    </Background>
  )
}

export default Image
