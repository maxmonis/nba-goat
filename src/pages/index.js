import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Home from "../components/home"
import usePlayers from "../hooks/use-players"

const IndexPage = () => {
  usePlayers()
  return (
    <Layout>
      <Image />
      <Home />
    </Layout>
  )
}

export default IndexPage
