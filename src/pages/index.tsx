import * as React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "@/components/helmet"
import * as style from "@/styles/index.module.scss";
import TopBackground from "@/components/topBackground"

const IndexPage = ({data}) => (
  <>
    <Helmet />
    <TopBackground />
  </>
);

export default IndexPage
