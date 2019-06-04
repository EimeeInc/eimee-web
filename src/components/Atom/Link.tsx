import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";
import RoutingContext from "@/contexts/Routing";

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
  to?: string;
  blank?: boolean;
  replace?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

const Link = ({
  to = "",
  blank = false,
  replace = false,
  children,
  ...props
}: LinkProps) => {
  const routingContext = React.useContext(RoutingContext);
  const from = routingContext ? routingContext.current : "/";
  const isSameRouting = to === from;

  return to ? (
    blank ? (
      <AnchorLink href={to} target="_blank" {...props}>
        {children}
      </AnchorLink>
    ) : (
      <StyledLink
        to={to}
        replace={isSameRouting || replace}
        state={{ from: from }}
        {...props}
      >
        {children}
      </StyledLink>
    )
  ) : (
    <></>
  );
};

export default Link;
