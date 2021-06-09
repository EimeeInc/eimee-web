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
          elchikaは、オープンに技術交換が行われるハードウェアの開発者コミュニティです。IoTを活用したスマートホーム、AIやセンサーを用いたロボット、FPGAなどのスキルを共有することで、新しいテクノロジーの発見に役立ちます。ハードウェアの知識や経験、習熟の度合いに関わらず、ユーザー同士がフラットに交流できる場として、ハードウェアに関わる全ての人の創作活動をサポートしています。
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
