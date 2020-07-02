import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Workstyle from "@/components/Organism/Workstyle";

const IndexPage = () => (
  <>
    <Helmet
      title="ワークスタイル"
      canonical="/workstyle/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_office.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Workstyle"
      ruby="ワークスタイル"
      color="#ffb471"
      src="/assets/img/ph_top_office.jpg"
    />
    <Breadcrumbs name="workstyle" />
    <PageContentsWrapper>
      <Workstyle />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
