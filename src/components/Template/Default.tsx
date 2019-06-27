import * as React from "react";
import styled from "@emotion/styled";
import MediaQueryContext, { initMediaQueryStore } from "@/contexts/MediaQuery";
import RoutingContext, { initRoutingStore } from "@/contexts/Routing";
import PageTransition from "@/components/PageTransition";
import MediaQuery from "@/components/MediaQuery";
import Routing from "@/components/Routing";
import GlobalMenu from "@/components/Organism/GlobalMenu";
import Footer from "@/components/Organism/Footer";
import { LocationContext } from "@reach/router";
import displayConsoleBranding from "@/mixins/displayDrandingConsole";
import { initGtag, updatePagePath } from "@/mixins/gtag";

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  width: 100%;
  max-width: 1920px;
`;

const Layout = ({
  children,
  location,
}: {
  children: React.ReactNode;
} & LocationContext) => {
  const mediaQueryStore = initMediaQueryStore("sm");
  const routingStore = initRoutingStore(location.pathname);

  React.useEffect(displayConsoleBranding, []);
  React.useEffect(initGtag, []);
  React.useEffect(() => {
    updatePagePath(location);
  }, [location.pathname]);

  return (
    <MediaQueryContext.Provider value={mediaQueryStore}>
      <MediaQuery />
      <RoutingContext.Provider value={routingStore}>
        <Routing path={location.pathname} />
        <PageTransition location={location}>
          <GlobalMenu />
          <PageWrapper>
            <Page>{children}</Page>
          </PageWrapper>
          <Footer />
        </PageTransition>
      </RoutingContext.Provider>
    </MediaQueryContext.Provider>
  );
};

export default Layout;
