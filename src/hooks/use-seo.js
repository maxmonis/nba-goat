import { graphql, useStaticQuery } from "gatsby"

const useSeo = () => {
  const { datoCmsSite } = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  return datoCmsSite.globalSeo
}

export default useSeo
