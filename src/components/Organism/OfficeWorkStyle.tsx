import * as React from "react";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import DefinitionBlock from "@/components/Molecule/PictureBlock";
import DoubleQuote from "../Atom/DoubleQuote";

const Works = () => (
  <>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          ビジネスを円滑に進めるための機能的かつ象徴的なフロントロビー
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          24 時間利用可能なフロントロビーは、ミーティングスペースとしても活躍する機能的な空間。無線LAN導入済のため商談に最適な環境でビジネスを円滑に進めることができます。壁面には専門誌・コミック・洋書など約350冊を超える書籍が用意されており、傍らではビリヤードに興じることもできる遊び心満載のフロントロビーです。
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_office_lobby.jpg"
          alt="lobby"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          嬉しいドリンク飲み放題☆♪美味しいお菓子もおつまみOK
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          オフィス内にはドリンクサーバーを常設しています。アメリカンコーヒー、ブレンドコーヒー、紅茶や日本茶など季節により変わるラインナップを好きなタイミングで愉しめます。小腹が空いたら「おやつバスケット」からお気に入りのお菓子をつまむのもOK。コーヒーブレイクで更に楽しく面白いアイデアをクリエイトしています。
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_office_sweets.jpg"
          alt="sweets"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          ロケ地としても人気が高いお洒落なバーで至福のひと時を
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          オフィスビルの最上階には、TVドラマのロケ地としても人気が高いお洒落でハイセンスなバーラウンジ「the BAR」が併設されています。お台場の夜景を一望できる最高のロケーションで至福のひと時を過ごせば、仕事の疲れもリフレッシュ。
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_office_bar.jpg"
          alt="bar"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          フィットネスジム・シャワールーム完備
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          ランニングマシーンをはじめ、ダンベルやバイク、各種筋トレマシーンを24時間自由に利用することができます。サイズ感はコンパクトなジムですが、海側の窓が全面ガラス張りになっており、オーシャンビューの開放的な空間でトレーニングに専念できます。トレーニングのあとには整頓された清潔なシャワールームで汗を流すことも。
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_office_gym.jpg"
          alt="gym"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          東京湾オーシャンビュー、お台場シティビューを存分に堪能
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          東京湾を一望できるガラス張りの広々としたオフィスでは、開放感溢れるクリエイティブな空間を愉しみながらのびのびと働いています。昼は太陽と海の煌めきを、夜は客船や対岸の街の輝きを身近に感じる開放的な眺め。天気の良い日には美しい富士山も眺望できます。屋上からはお台場のシティービューを堪能することもでき、まさに最高のロケーションを兼ね備えたオフィスと言えます。
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_office_view.jpg"
          alt="ocean view"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          お台場の海風を感じられる屋上でのんびり<DoubleQuote>リフレッシュタイム</DoubleQuote>
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          自由に出入りできる屋上はみんなの憩い場。アイデアに行き詰った時は海風を感じながら頭の中をリセットすることができます。屋上空間「the SALON」には喫煙スペースが設けられており、喫煙者・非喫煙者がコミュニケーションを深めるのにも最適です。テーブルや椅子も常設されているので、晴れた日にはご飯を持ち寄って屋上ランチを愉しむことも
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_office_rooftop.jpg"
          alt="rooftop"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
  </>
);

export default Works;
