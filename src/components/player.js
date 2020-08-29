import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "./layout"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsPlayer(filter: { slug: { eq: $slug } }) {
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
`

const Player = ({
  data: {
    allDatoCmsPlayer: { nodes },
  },
}) => {
  const { title, content, image } = nodes[0]
  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            font-size: 4rem;
            text-align: center;
            @media (min-width: 768px) {
              font-size: 6rem;
            }
          `}
        >
          {title}
        </h1>
        <Image fluid={image.fluid} />
        <p>{content}</p>
      </main>
    </Layout>
  )
}

export default Player
