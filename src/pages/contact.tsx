import * as React from "react"
import Helmet from "@/components/Helmet"
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock"
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper"
import CardTitle from "@/components/Atom/CardTitle"
import News from "@/components/Organism/News"
import Breadcrumbs from "@/components/Molecule/Breadcrumbs"

const IndexPage = () => (
  <>
    <Helmet title="お問い合わせ" />
    <CommonHeaderBlock title="Contact" ruby="お問い合わせ" color="#76c0f1" src="/assets/img/ph_top_contact.jpg" />
    <Breadcrumbs name="contact"/>
    <PageContentsWrapper>
      <CardTitle large>About</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
)

export default IndexPage
