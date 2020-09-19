import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Home from "../components/home"
import Preview from "../components/preview"
import usePlayers from "../hooks/use-players"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const List = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const players = usePlayers()
  return (
    <Layout>
      <Image />
      <Home />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        The Candidates
      </h2>
      <List>
        {players.map((player, i) => (
          <Preview player={player} key={i} />
        ))}
      </List>
    </Layout>
  )
}

export default IndexPage
