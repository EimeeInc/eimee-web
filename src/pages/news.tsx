import * as React from "react"
import { Link } from "gatsby"
import Helmet from "@/components/Helmet"

const IndexPage = () => (
  <>
    <Helmet title="ニュース" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby siteああああああああああああ.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
