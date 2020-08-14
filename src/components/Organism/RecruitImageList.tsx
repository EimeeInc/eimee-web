import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 25%;
  height: 100%;
  padding: 5px;

  ${media.lessThan("sm")`
    width: 50%;
  `}
`;

type RecruitImageListProps = {
  mode: "pdm" | "se";
};

const RecruitImageList = ({ mode }: RecruitImageListProps) => {
  return (
    <Wrapper>
      {mode === "pdm" ? (
        <>
          <Image src="/assets/img/recruit_engineer_ph.jpg" alt="エンジニア" />
          <Image src="/assets/img/recruit_designer_ph.jpg" alt="デザイナー" />
          <Image src="/assets/img/recruit_planner_ph.jpg" alt="プランナー" />
          <Image src="/assets/img/recruit_writer_ph.jpg" alt="ライター" />
        </>
      ) : (
        <>
          <Image src="/assets/img/recruit_engineer2_ph.jpg" alt="エンジニア" />
          <Image src="/assets/img/recruit_designer2_ph.jpg" alt="デザイナー" />
          <Image src="/assets/img/recruit_planner2_ph.jpg" alt="プランナー" />
          <Image src="/assets/img/recruit_writer2_ph.jpg" alt="ライター" />
        </>
      )}
    </Wrapper>
  );
};

export default RecruitImageList;
