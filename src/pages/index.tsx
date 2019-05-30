import * as React from "react"
import Helmet from "@/components/Helmet"
import TopBackground from "@/components/Organism/TopBackground"
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle"
import Works from "@/components/Organism/Works";
import News from "@/components/Organism/News";

const IndexPage = () => (
  <>
    <Helmet />
    <TopBackground />
    <PageContentsWrapper>
      <CardTitle large>WORKS</CardTitle>
      <Works />
      <CardTitle large>NEWS</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
)

export default IndexPage
