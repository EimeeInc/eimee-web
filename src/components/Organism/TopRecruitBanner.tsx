import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import MediaQueryContext from "@/contexts/MediaQuery";
import Banner from "@/components/Atom/Banner";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  ${media.lessThan("md")`
    margin-bottom: 40px;
  `}
`;

const StyledBanner = styled(Banner)`
  display: block;
  width: 100%;
  border: 1px solid #efefef;
`;

const TopRecruitBanner = ({ className }: { className?: string }) => {
  const mediaQueryContext = React.useContext(MediaQueryContext);
  const imageSuffix = (() => {
    if (!mediaQueryContext) return "";

    switch (mediaQueryContext.current) {
      case "sm":
      case "md":
        return "03";
      case "lg":
      case "xl":
        return "02";
      default:
        return "";
    }
  })();
  const src = `/assets/img/ph_recruit_banner${imageSuffix}.jpg`;

  return (
    <Wrapper className={className}>
      <StyledBanner src={src} to="/recruit/" />
    </Wrapper>
  );
};

export default TopRecruitBanner;
