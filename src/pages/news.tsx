import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import News from "@/components/Organism/News";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Tab from "@/components/Molecule/Tab";

type NewsTabState = "notification" | "pressRelease";

const IndexPage = () => (
  <>
    <Helmet title="ニュース" />
    <CommonHeaderBlock
      title="News"
      ruby="ニュース"
      color="#d090ea"
      src="/assets/img/ph_top_news.jpg"
    />
    <Breadcrumbs name="news" />
    <PageContentsWrapper>
      <Tab<NewsTabState> selected="notification">
        <Tab.Menu<NewsTabState>>
          {({ Menu }) => (
            <>
              <Menu tag="notification">お知らせ</Menu>
              <Menu tag="pressRelease">プレスリリース</Menu>
            </>
          )}
        </Tab.Menu>
        <Tab.Body<NewsTabState> tag="notification">
          <News />
        </Tab.Body>
        <Tab.Body<NewsTabState> tag="pressRelease" />
      </Tab>
    </PageContentsWrapper>
  </>
);

export default IndexPage;
