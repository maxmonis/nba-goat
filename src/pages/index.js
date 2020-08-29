import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Home from "../components/home"
import Preview from "../components/preview"
import usePlayers from "../hooks/use-players"
import { css } from "@emotion/core"

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
        Best of the Best
      </h2>
      <ul>
        {players.map(player => (
          <Preview player={player} />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
