import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import routings from "@/util/routings"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-top: solid 1px #efefef;
  border-bottom: solid 1px #efefef;
  color: #505050;
  background-color: #f1f1f1;
`;

const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  font-size: 1.2rem;

  &:not(.isRoot) {
    padding-left: 24px;
  }
`;

const StyledLink = styled(Link)`
  color: #0b69a0;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
  background-color: #dddddd;

  &:hover {
    background-color: #fccf88;
  }
`;

type BreadcrumbProps = {
  name: keyof typeof routings | null,
  isCurrent? : boolean
};

const Breadcrumb = ({ name, isCurrent = false }: BreadcrumbProps) => (
    (name !== null) ?
      <>
        <Breadcrumb name={routings[name].parent} />
        {
          (isCurrent)
            ? <Label className={ classnames({ isRoot: !routings[name].parent }) }>{routings[name].label}</Label>
            : <StyledLink to={routings[name].location}><Label className={ classnames({ isRoot: !routings[name].parent }) }>{routings[name].label}へ戻る</Label></StyledLink>
        }
      </> : null
);

type BreadcrumbsProps = {
  name?: keyof typeof routings,
  className?: string
};

const Breadcrumbs = ({ name = "top", className }: BreadcrumbsProps) => (
  <Wrapper className={className}>
    <Breadcrumb name={name} isCurrent />
  </Wrapper>
);

export {
  Breadcrumb,
  Breadcrumbs,
}

export default Breadcrumbs
