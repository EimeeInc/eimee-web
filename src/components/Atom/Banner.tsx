import * as React from "react"
import styled from "@emotion/styled"
import Link from "@/components/Atom/Link"

type BannerProps = {
  src: string
  to?: string
  blank?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

const StyledLink = styled(Link)<BannerProps>`
  opacity: 1;
  transition: opacity 0.4s;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: contain;

  &:hover {
    opacity: 0.7;
  }
`

const Banner = ({
  src,
  to = "",
  blank = false,
  children,
  ...props
}: BannerProps) => (
  <StyledLink src={src} to={to} blank={blank} { ...props } />
)

export default Banner
