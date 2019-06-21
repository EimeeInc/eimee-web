import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import OfficeWorkStyle from "@/components/Organism/OfficeWorkStyle";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";

const IndexPage = () => (
  <>
    <Helmet
      title="ワークスタイル"
      canonical="/office/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_office.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Work Style"
      ruby="ワークスタイル"
      color="#67d8c4"
      src="/assets/img/ph_top_office.jpg"
    />
    <Breadcrumbs name="office" />
    <PageContentsWrapper>
      <OfficeWorkStyle />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
