import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Nav from "./nav"

const Title = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 3rem;
`

const Header = () => (
  <header
    css={css`
      background-color: #333;
      padding: 1rem;
    `}
  >
    <div
      css={css`
        max-width: 1200px;
        margin: 0 auto;
        @media (min-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}
    >
      <Title to="/">Greatest Of All Time</Title>
      <Nav />
    </div>
  </header>
)

export default Header
