import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import News from "@/components/Organism/News";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";

const IndexPage = () => (
  <>
    <Helmet title="ワークスタイル" />
    <CommonHeaderBlock
      title="Work Style"
      ruby="ワークスタイル"
      color="#67d8c4"
      src="/assets/img/ph_top_office.jpg"
    />
    <Breadcrumbs name="office" />
    <PageContentsWrapper>
      <CardTitle large>Work Style</CardTitle>
      <News />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
