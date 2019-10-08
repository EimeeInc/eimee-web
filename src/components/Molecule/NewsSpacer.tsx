import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;

  &:nth-of-type(4n+4) {
    ${media.lessThan("xl")`
      display: none;
    `}
  }

  &:nth-of-type(3n+3) {
    ${media.lessThan("xl")`
      display: flex;
    `}

    ${media.lessThan("lg")`
      display: none;
    `}
  }

  ${media.lessThan("xl")`
    display: none;
  `}

  ${media.lessThan("lg")`
    height: 280px;
    display: none;
  `}

  ${media.lessThan("md")`
    height: 250px;
  `}

  ${media.lessThan("sm")`
    height: 280px;
  `}
`;

const NewsSpacer = () => (
  <>
    <Spacer />
  </>
);

export default NewsSpacer;
