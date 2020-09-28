import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Global, css } from "@emotion/core"
import Helmet from "react-helmet"
import useSEO from "../hooks/use-seo"

const Layout = props => {
  const seo = useSEO()
  const {
    fallbackSeo: { description, title },
  } = seo
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 16px;
            font-size: 1.6 rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div
        css={css`
          min-height: 100vh;
          padding-bottom: 20px;
        `}
      >
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
