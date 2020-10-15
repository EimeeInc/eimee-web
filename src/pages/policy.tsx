import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Policy from "@/components/Organism/Policy";

const IndexPage = () => (
  <>
    <Helmet
      description="個人情報保護方針"
      title="個人情報保護方針"
      canonical="/policy/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_policy.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Policy"
      ruby="個人情報保護方針"
      color="#e8974c"
      src="/assets/img/ph_top_policy.jpg"
    />
    <Breadcrumbs name="policy" />
    <PageContentsWrapper>
      <CardTitle>個人情報保護方針</CardTitle>
      <Policy />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
