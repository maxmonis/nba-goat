exports.createPages = async ({ graphql, reporter, actions }) => {
  const res = await graphql(`
    query {
      allDatoCmsPlayer {
        nodes {
          slug
        }
      }
    }
  `)
  if (res.errors) {
    reporter.panic("No results ", res.errors)
  }
  const players = res.data.allDatoCmsPlayer.nodes
  for (const player of players) {
    const { slug } = player
    actions.createPage({
      path: slug,
      component: require.resolve("./src/components/player.js"),
      context: {
        slug: slug,
      },
    })
  }
}
