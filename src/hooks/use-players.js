import { graphql, useStaticQuery } from "gatsby"

const usePlayers = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPlayer {
        nodes {
          title
          id
          slug
          content
          accolades
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
    const { title, id, content, image, slug, accolades } = player
    return { title, id, content, image, slug, accolades }
  })
}

export default usePlayers
