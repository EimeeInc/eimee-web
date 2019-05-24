import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"

const StyledLink = styled(Link)`
  width: 80px;
  height: 80px;
  opacity: 1;
  background-image: url("/assets/img/ico_top.png");
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
    transition-duration: 0.4s;
  }

  ${media.lessThan("md")`
    width: 60px;
    height: 60px;
  `}
`

const HomeButton = ({ className }: { className?: string }) => (
  <StyledLink className={className} to="/" />
)

export default HomeButton
