import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SiteMetadata = {
  title: string
  description: string
  author: string
  baseUrl: string
  css: (string | Object)[]
  script: (string | Object)[]
}

type Site = {
  siteMetadata: SiteMetadata
}

type QueryResult = {
  site: Site
}

export default ({
  description,
  lang = "ja",
  meta = [],
  keywords = [],
  title,
  canonical = "/",
}: Partial<{
  description: string
  lang: string
  meta: {
    name: string
    content: string
  }[]
  keywords: string[]
  title: string
  canonical: string
}>) => {
  const { site }: QueryResult = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
            css
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const selectedTitle = title
    ? `${site.siteMetadata.title} | ${title}`
    : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={selectedTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: selectedTitle,
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
        .concat({
          name: `keywords`,
          content: [
            ...keywords,
            "ニュース",
            "サービス",
            "エイミー",
            "Eimee",
            "えいみー",
            "hikaQ",
            "ヒカキュー",
          ].join(`, `),
        })
        .concat(meta)}
      link={[
        {
          rel: "shortcut icon",
          href: `/favicon.ico`,
        },
        {
          rel: "canonical",
          href: `${site.siteMetadata.baseUrl}${canonical}`,
        },
        ...site.siteMetadata.css.map(x =>
          typeof x === "string" ? { rel: "stylesheet", href: x } : x
        ),
      ]}
      script={[
        ...(site.siteMetadata.script || []).map(x =>
          typeof x === "string" ? { src: x } : x
        ) 
      ]
      }
    />
  )
}
