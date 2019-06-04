import * as React from "react"
import Helmet from "@/components/Helmet"
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock"
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper"
import CardTitle from "@/components/Atom/CardTitle"
import News from "@/components/Organism/News"
import Breadcrumbs from "@/components/Molecule/Breadcrumbs"

const IndexPage = () => (
  <>
    <Helmet title="ニュース" />
    <CommonHeaderBlock
      title="News"
      ruby="ニュース"
      color="#d090ea"
      src="/assets/img/ph_top_news.jpg"
    />
    <Breadcrumbs name="news" />
    <PageContentsWrapper>
      <CardTitle large>NEWS</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
)

export default IndexPage
