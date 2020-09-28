import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

const NotFoundPage = () => (
  <Layout>
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1>404: NOT FOUND</h1>
      <Link to="/">Return home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
