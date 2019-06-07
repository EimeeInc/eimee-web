import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import GraphBlock from "@/components/Molecule/GraphBlock";

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto 80px auto;
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan("md")`
    flex-direction: column;
  `}

  & > * {
    flex: auto;
    margin: 0 30px 30px;

    ${media.lessThan("md")`
      margin: 0 15px 20px;
    `}
  }
`;

const Annotation = styled.p`
  font-size: 1.8rem;
  text-align: right;

  ${media.lessThan("sm")`
    font-size: 1.6rem;
  `}
`;

const Staff = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Wrapper {...props}>
    <FadeInEnteringCard>
      <GraphWrapper>
        <GraphBlock src="/assets/img/ph_question01.svg" alt="question01">
          <GraphBlock.Header>出身地の割合は？</GraphBlock.Header>
        </GraphBlock>
        <GraphBlock src="/assets/img/ph_question02.svg" alt="question02">
          <GraphBlock.Header>会社を出る時間は？</GraphBlock.Header>
        </GraphBlock>
      </GraphWrapper>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <GraphWrapper>
        <GraphBlock src="/assets/img/ph_question03.svg" alt="question03">
          <GraphBlock.Header>年齢層の割合は？</GraphBlock.Header>
        </GraphBlock>
        <GraphBlock src="/assets/img/ph_question04.svg" alt="question04">
          <GraphBlock.Header>性格は？</GraphBlock.Header>
        </GraphBlock>
      </GraphWrapper>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <GraphWrapper>
        <GraphBlock src="/assets/img/ph_question05.svg" alt="question05">
          <GraphBlock.Header>社内の雰囲気は？</GraphBlock.Header>
        </GraphBlock>
        <GraphBlock src="/assets/img/ph_question06.svg" alt="question06">
          <GraphBlock.Header>業種の割合は？</GraphBlock.Header>
        </GraphBlock>
      </GraphWrapper>
      <Annotation>※2018年10月現在の社員</Annotation>
    </FadeInEnteringCard>
  </Wrapper>
);

export default Staff;
