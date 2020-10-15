import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SiteMetadata = {
  title: string;
  description: string;
  author: string;
  baseUrl: string;
  css: (string | Object)[];
  script: (string | Object)[];
};

type Site = {
  siteMetadata: SiteMetadata;
};

type QueryResult = {
  site: Site;
};

type HelmetProps = Partial<{
  description: string;
  lang: string;
  meta: {
    name: string;
    content: string;
  }[];
  link: React.LinkHTMLAttributes<HTMLLinkElement>[];
  keywords: string[];
  title: string;
  canonical: string;
}>;

export default ({
  description,
  lang = "ja",
  meta = [],
  link = [],
  keywords = [],
  title,
  canonical = "/",
}: HelmetProps) => {
  const { site }: QueryResult = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
            script
            css
          }
        }
      }
    `,
  );

  if (description) {
    site.siteMetadata.description =
      site.siteMetadata.description.slice(0, 69) +
      "の" +
      description +
      "ページです。";
  }
  const metaDescription = site.siteMetadata.description;

  const selectedTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

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
          typeof x === "string" ? { rel: "stylesheet", href: x } : x,
        ),
      ].concat(link)}
      script={[
        ...(site.siteMetadata.script || []).map(x =>
          typeof x === "string" ? { src: x } : x,
        ),
      ]}
    />
  );
};
