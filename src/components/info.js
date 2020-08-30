import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  padding-top: 1rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: 5fr 3fr;
    column-gap: 2rem;
  }
  p {
    line-height: 2;
  }
`

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
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
        <p
          css={css`
            @media (min-width: 992px) {
              font-size: 2rem;
            }
          `}
        >
          {content}
        </p>
        <Image fluid={image.fluid} />
      </Container>
      <div
        css={css`
          @media (min-width: 768px) {
            height: 20rem;
          }
        `}
      />
    </>
  )
}

export default Info
