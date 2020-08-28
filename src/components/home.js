import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  console.log(info)
  return (
    <>
      <h2>Title of Page</h2>
    </>
  )
}

export default Home
