import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import styled from "@emotion/styled"

const AnchorLink = styled.a`
  color: #0b69a0;

  &:hover {
    color: #df944c;
  }
`;

const StyledLink = styled(GatsbyLink)`
  color: #0b69a0;

  &:hover {
    color: #df944c;
  }
`;

type LinkProps = {
  to?: string,
  blank?: boolean,
}

const Link = ({ to = "", blank = false, children, ...props }: LinkProps & React.HTMLAttributes<HTMLAnchorElement>) => (
  (blank)
    ? <AnchorLink href={ to } target="_blank" { ...props }>{children}</AnchorLink>
    : <StyledLink to={ to } { ...props }>{children}</StyledLink>
);

export default Link
