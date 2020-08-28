import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <h1>About us:</h1>
      <h3>We are one person, Max</h3>
      <Link to={"/"}>Back to Homepage</Link>
    </Layout>
  )
}

export default About
