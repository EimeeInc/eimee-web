import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import { Spacer4Way as Spacer } from "@/components/Atom/Spacer";
import StaffBlock from "@/components/Molecule/StaffBlock";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 80px auto 80px auto;

  ${media.lessThan("xl")`
    max-width: 1200px;
  `}

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
  `}

  & > * {
    width: calc(100% / 4 - 25px);

    &:not(:nth-of-type(4n-3)) {
      margin-left: 25px;
    }

    ${media.lessThan("xl")`
      width: calc(100% / 3 - 25px);

      &:not(:nth-of-type(4n-3)) {
        margin-left: 0;
      }

      &:not(:nth-of-type(3n-2)) {
        margin-left: 25px;
      }
    `}

    &:nth-of-type(n+5) {
      margin-top: 30px;

      ${media.lessThan("xl")`
        margin-top: 0;
      `}
    }

    &:nth-of-type(n + 4) {
      ${media.lessThan("xl")`
        margin-top: 30px;
      `}

      ${media.lessThan("lg")`
        margin-top: 0;
      `}
    }

    ${media.lessThan("lg")`
      width: calc(100% / 2 - 25px);

      &:not(:nth-of-type(3n-2)) {
        margin-left: 0;
      }

      &:not(:nth-of-type(2n-1)) {
        margin-left: 25px;
      }
    `}

    &:nth-of-type(n+3) {
      ${media.lessThan("lg")`
        margin-top: 30px;
      `}

      ${media.lessThan("sm")`
        margin-top: 0;
      `}
    }

    ${media.lessThan("md")`
      width: calc(100% / 2 - 15px);

      &:not(:nth-of-type(2n-1)) {
        margin-left: 15px;
      }
    `}

    ${media.lessThan("sm")`
      width: 90%;
    `}

    &:not(:first-of-type) {
      ${media.lessThan("sm")`
        margin-top: 30px;
      `}
    }
  }
`;

const Staff = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Wrapper {...props}>
    <StaffBlock src="/assets/img/ph_staff_ceo.png" alt="engineer">
      <StaffBlock.Header job="CEO・企画・営業">タケモト</StaffBlock.Header>
      <StaffBlock.Body>みんなが楽しめるサービスを作る</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_engineer.png" alt="engineer">
      <StaffBlock.Header job="チーフエンジニア">Engineerの父</StaffBlock.Header>
      <StaffBlock.Body>
        細部にまでこだわったクオリティの高いモノをチーム一丸となって作り上げる
      </StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_director.png" alt="engineer">
      <StaffBlock.Header job="Webディレクター">BOSS</StaffBlock.Header>
      <StaffBlock.Body>みんなに愛されるものを創造する</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_other.png" alt="engineer">
      <StaffBlock.Header job="企画・ライター">姐さん</StaffBlock.Header>
      <StaffBlock.Body>
        正しい情報、有益な情報を皆に与えられる会社を目指す
      </StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_designer01.png" alt="engineer">
      <StaffBlock.Header job="Webデザイナー">夢の国の仏</StaffBlock.Header>
      <StaffBlock.Body>世に変化を与えられるものを作る</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_planning01.png" alt="engineer">
      <StaffBlock.Header job="企画">微笑みの山口</StaffBlock.Header>
      <StaffBlock.Body>世にないアイデアを形にする</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_planning02.png" alt="engineer">
      <StaffBlock.Header job="企画">静かなる文豪</StaffBlock.Header>
      <StaffBlock.Body>楽しいを世界に届けたい</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_engineer02.png" alt="engineer">
      <StaffBlock.Header job="エンジニア">もじゃもじゃ男爵</StaffBlock.Header>
      <StaffBlock.Body>誰かの役に立つものを作りたい</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_engineer03.png" alt="engineer">
      <StaffBlock.Header job="エンジニア">肉大臣</StaffBlock.Header>
      <StaffBlock.Body>みんなに頼られるエンジニアを目指す</StaffBlock.Body>
    </StaffBlock>
    <StaffBlock src="/assets/img/ph_staff_engineer04.png" alt="engineer">
      <StaffBlock.Header job="エンジニア">tk</StaffBlock.Header>
      <StaffBlock.Body>可能性の中から最適解を模索していきたい</StaffBlock.Body>
    </StaffBlock>
    <Spacer />
  </Wrapper>
);

export default Staff;
