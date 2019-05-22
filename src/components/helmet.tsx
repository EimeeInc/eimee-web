import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ description, lang = "ja", meta = [], keywords = [], title, canonical = "/" }: Partial<{
  description: string,
  lang: string,
  meta: {
    name: string,
    content: string,
  }[],
  keywords: string[],
  title: string,
  canonical: string,
}>) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s${ title ? ` | ${site.siteMetadata.title}` : "" }`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          httpEquiv: "X-UA-Compatible",
          content: `IE=edge`,
        },
      ]
        .concat(
            {
                name: `keywords`,
                content: [...keywords, "ニュース","サービス","エイミー","Eimee","えいみー","hikaQ","ヒカキュー"].join(`, `),
              }
        )
        .concat(meta)}
      link={[
        {
          rel: "canonical",
          href: `${site.siteMetadata.baseUrl}${canonical}`,
        },
        {
          rel: "stylesheet",
          href: `https://fonts.googleapis.com/css?family=Montserrat:400,700`,
        },
        {
          rel: "stylesheet",
          href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700`,
        },
      ]}
    />
  )
}
