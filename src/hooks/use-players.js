import { graphql, useStaticQuery } from "gatsby"

const usePlayers = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPlayer {
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
  `)
  return data.allDatoCmsPlayer.nodes.map(player => {
    const { title, id, content, image, slug } = player
    return { title, id, content, image, slug }
  })
}

export default usePlayers
