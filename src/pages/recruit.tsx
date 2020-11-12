import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import RecruitSystemEngineerSummary from "@/components/Organism/RecruitSystemEngineerSummary";

const IndexPage = () => (
  <>
    <Helmet
      description="日本のモノづくりを応援！！電子工作やハードウェア、IoTの知識の交流が行える『elchika(エルチカ)』を運営している、エイミー株式会社の採用情報ページです。"
      title="採用情報"
      canonical="/recruit/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_recruit.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Recruit"
      ruby="採用情報"
      color="#fde56b"
      src="/assets/img/ph_top_recruit.jpg"
    />
    <Breadcrumbs name="recruit" />
    <PageContentsWrapper>
      <CardTitle>elchika システムエンジニア（PL / PL候補）</CardTitle>
      <RecruitSystemEngineerSummary />
    </PageContentsWrapper>
  </>
);

export default IndexPage;
