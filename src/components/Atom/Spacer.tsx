import styled from "@emotion/styled";
import media from "@/util/breakpoint";

export const Spacer4Way = styled.div`
  display: none;
  flex: auto;

  &:nth-of-type(4n),
  &:nth-of-type(4n-1),
  &:nth-of-type(4n-2) {
    display: block;

    ${media.lessThan("xl")`
      display: none;
    `}
  }

  &:nth-of-type(3n),
  &:nth-of-type(3n-1) {
    ${media.lessThan("xl")`
      display: block;
    `}

    ${media.lessThan("lg")`
      display: none;
    `}
  }

  &:nth-of-type(2n) {
    ${media.lessThan("lg")`
      display: block;
    `}

    ${media.lessThan("sm")`
      display: none;
    `}
  }
`;
