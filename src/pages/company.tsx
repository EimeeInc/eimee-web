import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import News from "@/components/Organism/News";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";

const IndexPage = () => (
  <>
    <Helmet title="会社概要" />
    <CommonHeaderBlock
      title="Company"
      ruby="会社概要"
      color="#ec7e6f"
      src="/assets/img/ph_top_company.jpg"
    />
    <Breadcrumbs name="company" />
    <PageContentsWrapper>
      <CardTitle large>Company</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
