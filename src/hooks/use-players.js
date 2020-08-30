import { graphql, useStaticQuery } from "gatsby"

const usePlayers = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPlayer {
        nodes {
          name
          id
          slug
          blurb
          accolades
          bio
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
    const { name, id, blurb, image, slug, accolades, bio } = player
    return { name, id, blurb, image, slug, accolades, bio }
  })
}

export default usePlayers
