import * as React from "react"
import PageTransition from "@/components/PageTransition"
import Header from "@/components/Organism/Header"
import styled from "@emotion/styled"

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Page = styled.div`
  width: 100%;
  max-width: 1920px;
`

const Layout = ({
  children,
  location,
}: {
  children: React.ReactNode
  location: Location
}) => (
  <PageTransition location={location}>
    <Header />
    <PageWrapper>
      <Page>{children}</Page>
    </PageWrapper>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </PageTransition>
)

export default Layout
