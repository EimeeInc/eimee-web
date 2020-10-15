import * as React from "react";
import Helmet from "@/components/Helmet";
import TopHeader from "@/components/Organism/TopHeader";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import Works from "@/components/Organism/Works";
import News from "@/components/Organism/News";
import TopRecruitBanner from "@/components/Organism/TopRecruitBanner";

const IndexPage = () => (
  <>
    <Helmet
      description="日本のモノづくりを応援！！電子工作やハードウェア、IoTの知識の交流が行える『elchika(エルチカ)』を運営している、エイミー株式会社のホームページです。"
      link={[
        { rel: "preload", href: "/assets/img/ph_top1.jpg", as: "image" },
        { rel: "preload", href: "/assets/img/ph_top2.jpg", as: "image" },
        { rel: "preload", href: "/assets/img/ph_top3.jpg", as: "image" },
        { rel: "preload", href: "/assets/img/ph_top4.jpg", as: "image" },
      ]}
    />
    <TopHeader />
    <PageContentsWrapper>
      <CardTitle large>WORKS</CardTitle>
      <Works />
      <CardTitle large>NEWS</CardTitle>
      <News />
      <TopRecruitBanner />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
