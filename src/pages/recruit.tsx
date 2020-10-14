import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Tab from "@/components/Molecule/Tab";
import RecruitImageList from "@/components/Organism/RecruitImageList";
import RecruitProductManagerSummary from "@/components/Organism/RecruitProductManagerSummary";
import RecruitSystemEngineerSummary from "@/components/Organism/RecruitSystemEngineerSummary";

type RecruitTabState = "pdm" | "se";

const IndexPage = () => (
  <>
    <Helmet
      description="日本のモノづくりを応援！！電子工作やハードウェア、IoTの知識の交流が行える『elchika(エルチカ)』を運営している、エイミー株式会社の採用ページです。"
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
      <Tab<RecruitTabState> selected="pdm">
        <Tab.Menu<RecruitTabState>>
          {({ Menu }) => (
            <>
              <Menu tag="pdm">elchika プロダクトマネージャー</Menu>
              <Menu tag="se">elchika システムエンジニア（PL / PL候補）</Menu>
            </>
          )}
        </Tab.Menu>
        <Tab.Body<RecruitTabState> tag="pdm">
          <RecruitImageList mode="pdm" />
          <RecruitProductManagerSummary />
        </Tab.Body>
        <Tab.Body<RecruitTabState> tag="se">
          <RecruitImageList mode="se" />
          <RecruitSystemEngineerSummary />
        </Tab.Body>
      </Tab>
    </PageContentsWrapper>
  </>
);

export default IndexPage;
