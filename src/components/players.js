import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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

const Players = ({
  data: {
    allDatoCmsPlayer: { nodes },
  },
}) => {
  const { title, content, image } = nodes[0]
  return (
    <Layout>
      <main>
        <div
          css={css`
            padding: 2rem;
          `}
        >
          <Image fluid={image.fluid} />
          <h3
            css={css`
              font-size: 3rem;
            `}
          >
            {title}
          </h3>
          <p>{content}</p>
        </div>
      </main>
    </Layout>
  )
}

export default Players
