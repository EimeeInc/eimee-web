import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import News from "@/components/Organism/News";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";

const IndexPage = () => (
  <>
    <Helmet title="私たちについて" />
    <CommonHeaderBlock
      title="About"
      ruby="私たちについて"
      color="#ffb471"
      src="/assets/img/ph_top_about.jpg"
    />
    <Breadcrumbs name="about" />
    <PageContentsWrapper>
      <CardTitle large>About</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
