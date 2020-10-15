import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import AboutConcept from "@/components/Organism/AboutConcept";
import Works from "@/components/Organism/Works";

const IndexPage = () => (
  <>
    <Helmet
      description="日本のモノづくりを応援！！電子工作やハードウェア、IoTの知識の交流が行える『elchika(エルチカ)』を運営している、エイミー株式会社の私たちについてのページです。"
      title="私たちについて"
      canonical="/about/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_about.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="About"
      ruby="私たちについて"
      color="#ffb471"
      src="/assets/img/ph_top_about.jpg"
    />
    <Breadcrumbs name="about" />
    <PageContentsWrapper>
      <AboutConcept />
      <CardTitle>事業内容</CardTitle>
      <Works />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
