import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Tab from "@/components/Molecule/Tab";
import RecruitImageList from "@/components/Organism/RecruitImageList";
import RecruitFreshSummary from "@/components/Organism/RecruitFreshSummary";
import RecruitCareerSummary from "@/components/Organism/RecruitCareerSummary";

type RecruitTabState = "fresh" | "career";

const IndexPage = () => (
  <>
    <Helmet
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
      <Tab<RecruitTabState> selected="fresh">
        <Tab.Menu<RecruitTabState>>
          {({ Menu }) => (
            <>
              <Menu tag="fresh">フレッシュ採用</Menu>
              <Menu tag="career">キャリア採用</Menu>
            </>
          )}
        </Tab.Menu>
        <Tab.Body<RecruitTabState> tag="fresh">
          <RecruitImageList mode="fresh" />
          <RecruitFreshSummary />
        </Tab.Body>
        <Tab.Body<RecruitTabState> tag="career">
          <RecruitImageList mode="career" />
          <RecruitCareerSummary />
        </Tab.Body>
      </Tab>
    </PageContentsWrapper>
  </>
);

export default IndexPage;
