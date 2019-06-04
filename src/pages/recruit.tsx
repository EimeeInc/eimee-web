import * as React from "react"
import Helmet from "@/components/Helmet"
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock"
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper"
import CardTitle from "@/components/Atom/CardTitle"
import News from "@/components/Organism/News"
import Breadcrumbs from "@/components/Molecule/Breadcrumbs"

const IndexPage = () => (
  <>
    <Helmet title="採用情報" />
    <CommonHeaderBlock title="Recruit" ruby="採用情報" color="#fde56b" src="/assets/img/ph_top_recruit.jpg" />
    <Breadcrumbs name="recruit"/>
    <PageContentsWrapper>
      <CardTitle large>About</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
)

export default IndexPage
