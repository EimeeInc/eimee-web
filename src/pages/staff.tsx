import * as React from "react"
import Helmet from "@/components/Helmet"
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock"
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper"
import CardTitle from "@/components/Atom/CardTitle"
import News from "@/components/Organism/News"
import Breadcrumbs from "@/components/Molecule/Breadcrumbs"

const IndexPage = () => (
  <>
    <Helmet title="スタッフ紹介" />
    <CommonHeaderBlock title="Staff" ruby="スタッフ紹介" color="#ffa588" src="/assets/img/ph_top_staff.jpg" />
    <Breadcrumbs name="staff"/>
    <PageContentsWrapper>
      <CardTitle large>Work Style</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
)

export default IndexPage
