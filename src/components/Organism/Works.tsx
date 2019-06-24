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
      <PictureBlock to="https://chazine.jp/" blank>
        <PictureBlock.Header>
          <DoubleQuote>CHAzine</DoubleQuote>
        </PictureBlock.Header>
        <PictureBlock.Body>
          CHAzineは「シーンに最適なお茶が見つかる」をコンセプトにしたお茶専門のレビューブログです。仕事の合間に飲むお茶、ご飯と一緒に飲むお茶、夜寝る前に飲むお茶など、それぞれのシーンに最適なお茶を紹介しています。レビュー記事を書いているのは当社のライターです。実際に商品を試飲して、ほっと一息つきながら記事を作成しています。あなたもシーンに合ったお茶を見つけて、ほっと一息ついてみませんか？
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_works_chazine.jpg"
          alt="chazine"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
  </>
);

export default Works;
