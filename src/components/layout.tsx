import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import PageTransition from "@/components/pageTransition"
import Header from "@/components/header"
import "@/styles/reset.scss"
import "@/styles/global.scss"
import * as style from "@/components/layout.module.scss"

const Layout = ({ children, location } : { children : React.ReactNode, location: Location }) =>  (
  <PageTransition location={location}>
    <Header />
    <main className={style.pageWrapper}>
      <div className={style.page}>
        {children}
      </div>
    </main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </PageTransition>
)

export default Layout
