import * as React from "react";
import styled from "@emotion/styled";
import DoubleQuote from "@/components/Atom/DoubleQuote";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import PictureBlock from "@/components/Molecule/PictureBlock";

const StyledFadeInEnteringCard = styled(FadeInEnteringCard)`
  margin-bottom: 60px;
`;

const Works = () => (
  <>
    <StyledFadeInEnteringCard>
      <PictureBlock to="https://kuchikomu.jp/" blank>
        <PictureBlock.Header>
          <DoubleQuote>クチコム</DoubleQuote>
        </PictureBlock.Header>
        <PictureBlock.Body>
          みんなが選ぶ、本当にいいもの「クチコム」は、ユーザーの口コミのみでお店やサービスを評価するサイトです。評価の高い口コミが残り、評価の低い口コミは削除されるという今までになかったシステムを搭載しています。ユーザーが評価したそのままの情報を提供するため、これまでの世にあふれたサイトとは一線を画すサイトとして、ユーザーへ真の情報を提供します。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_works_kuchikomu.jpg"
          alt="kuchikomu"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock to="https://クレジットカードおすすめ比較.net/" blank>
        <PictureBlock.Header>
          <DoubleQuote>クレジットカードヒカキュー</DoubleQuote>
        </PictureBlock.Header>
        <PictureBlock.Body>
          クレジットカードおすすめ比較「ヒカキュー」とは、日本国内で発行されている数百種類のクレジットカードを紹介するサイト。ヒカキューは、数あるクレジットカード比較サイトの中でも、自分にピッタリの1枚を簡単に見つけ出せるという特徴があります。国内最大級の掲載件数を誇りながらも、カード全てに解説が付いている点も大きな特徴。また、クレジットカードにまつわるホットなニュースを発信しています。
        </PictureBlock.Body>
        <PictureBlock.Image src="/assets/img/ph_works_credit.jpg" alt="hikaq" />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>
          <DoubleQuote>リスティング広告代行</DoubleQuote>
        </PictureBlock.Header>
        <PictureBlock.Body>
          リスティング広告運用代行・コンサルティングを承ります。少額資金で始められるインターネット広告は中小企業等の宣伝媒体として、ターゲットとする顧客層へ的確に情報提供できる効果的な配信方法。Yahoo!プロモーション広告正規代理店としての経験豊富な実績に基づき、貴社の利益率を上昇させる仕組みを分かりやすく提案します。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_works_listing.jpg"
          alt="listing advertisement"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
  </>
);

export default Works;
