import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import CardTitle from "@/components/Atom/CardTitle";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Tab from "@/components/Molecule/Tab";
import CompanySummary from "@/components/Organism/CompanySummary";
import CompanyHistory from "@/components/Organism/CompanyHistory";
import CompanyAccess from "@/components/Organism/CompanyAccess";

type CompanyTabState = "summary" | "history";

const IndexPage = () => (
  <>
    <Helmet
      title="会社概要"
      canonical="/company/"
      link={[
        { rel: "preload", href: "/assets/img/ph_top_company.jpg", as: "image" },
      ]}
    />
    <CommonHeaderBlock
      title="Company"
      ruby="会社概要"
      color="#ec7e6f"
      src="/assets/img/ph_top_company.jpg"
    />
    <Breadcrumbs name="company" />
    <PageContentsWrapper>
      <Tab<CompanyTabState> selected="summary">
        <Tab.Menu<CompanyTabState>>
          {({ Menu }) => (
            <>
              <Menu tag="summary">会社概要</Menu>
              <Menu tag="history">沿革</Menu>
            </>
          )}
        </Tab.Menu>
        <Tab.Body<CompanyTabState> tag="summary">
          <CompanySummary />
          <CardTitle>アクセス</CardTitle>
          <CompanyAccess />
        </Tab.Body>
        <Tab.Body<CompanyTabState> tag="history">
          <CompanyHistory />
        </Tab.Body>
      </Tab>
    </PageContentsWrapper>
  </>
);

export default IndexPage;
