import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  padding-top: 3rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 5fr 4fr;
    column-gap: 2rem;
  }
  p {
    line-height: 2;
  }
`

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const { title, content, image } = data.allDatoCmsPage.nodes[0]
  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 3rem;
          padding: 0 2rem;
        `}
      >
        {title}
      </h2>
      <Container>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Container>
    </>
  )
}

export default Home
