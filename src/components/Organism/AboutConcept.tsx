import * as React from "react";
import styled from "@emotion/styled";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import PictureBlock from "@/components/Molecule/PictureBlock";

const StyledFadeInEnteringCard = styled(FadeInEnteringCard)`
  margin-top: 50px;
  margin-bottom: 30px;
`;

const TopRecruitBanner = ({ className }: { className?: string }) => (
  <StyledFadeInEnteringCard className={className}>
    <PictureBlock>
      <PictureBlock.Header>みんなが輝く多様な未来を創る</PictureBlock.Header>
      <PictureBlock.Body>
        エイミーは、『みんなが輝く多様な未来を創る』をミッションに掲げています。
        <br />
        現代は、モノ・サービスがあふれる時代であり、多様な価値観が認められるはずの社会なのに、ふと世の中を見渡してみると、意外と古くからの固定概念がまかり通ってる気がしています。『温故』もちろん、そんなサービスも大切です。素晴らしいサービスもたくさんあります。『知新』だけど、今までに無いサービス。誰もが『輝ける』サービス。
        <br />
        そんな誰もが『輝ける』サービスを作り出す会社があってもいいのではないか？
        <br />
        そういった思いから、まだ誰も知らない斬新なアイデアで、時代のニーズに合わせたプロダクトを開発しています。
      </PictureBlock.Body>
      <PictureBlock.Image src="/assets/img/about_concept.jpg" alt="concept" />
    </PictureBlock>
  </StyledFadeInEnteringCard>
);

export default TopRecruitBanner;
