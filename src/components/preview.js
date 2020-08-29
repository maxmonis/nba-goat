import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 95%;
  color: #fff;
  display: block;
  text-decoration: none;
  font-weight: 700;
`

const Preview = ({ player }) => {
  const { title, content, image, slug } = player
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
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
        <Button to={slug}>More about {title}...</Button>
      </div>
    </div>
  )
}

export default Preview
