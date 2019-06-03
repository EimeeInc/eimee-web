import * as React from "react"
import styled from "@emotion/styled"
import Link from "@/components/Atom/Link"

type BannerProps = {
  src?: string
  alt?: string
  to?: string
  blank?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

const StyledLink = styled(Link)<BannerProps>`
  opacity: 1;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.7;
  }
`

const Image = styled.img``

const Banner = ({
  src,
  alt,
  to = "",
  blank = false,
  children,
  ...props
}: BannerProps) =>
  src ? (
    <StyledLink to={to} blank={blank} {...props}>
      <Image src={src} alt={alt} />
    </StyledLink>
  ) : (
    <></>
  )

export default Banner
