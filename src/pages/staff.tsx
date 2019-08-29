import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Staff from "@/components/Organism/Staff";
import StaffGraph from "@/components/Organism/StaffGraph";
import CardTitle from "@/components/Atom/CardTitle";

const IndexPage = () => (
  <>
    <Helmet
      title="スタッフ紹介"
      canonical="/staff/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_staff.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Staff"
      ruby="スタッフ紹介"
      color="#ffa588"
      src="/assets/img/ph_top_staff.jpg"
    />
    {/* <Breadcrumbs name="staff" /> */}
    <PageContentsWrapper>
      <Staff />
      <CardTitle large>Q&amp;A</CardTitle>
      <StaffGraph />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
