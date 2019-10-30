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
      <PictureBlock to="https://elchika.com/" blank>
        <PictureBlock.Header>
          <DoubleQuote>elchika</DoubleQuote>
        </PictureBlock.Header>
        <PictureBlock.Body>
          elchikaは、IoTや電子工作に特化したナレッジ共有サービスです。ハードウェアに関するプログラミングや電子回路などのノウハウを投稿することができます。電子工作に関する情報を検索したい人や知識をアウトプットしたい人におすすめです。電子工作の知識や経験、習熟の度合いに関わらず、ユーザー同士がフラットに交流できる場として、電子工作を楽しむ全ての人の創作活動をサポートしています。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_works_elchika.jpg"
          alt="elchika"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
  </>
);

export default Works;
