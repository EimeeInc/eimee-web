import * as React from "react";
import styled from "@emotion/styled";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import DefinitionBlock from "@/components/Molecule/DefinitionBlock";

const Wrapper = styled.div`
  margin: 50px 0;
`;

const Text = styled.p`
  margin-bottom: 1em;
`;

const Author = styled.p`
  text-align: right;
  font-weight: bold;
`

const TopRecruitBanner = ({ className }: { className?: string }) => (
  <Wrapper className={className}>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Body>
          <Text>エイミー株式会社は「まだ世にない楽しいモノを作る」を目標に掲げるスタートアップ企業です。皆様の身近にありそうでなかった新しい発想のサービスをご提供できるよう、日々企画・開発に努めております。</Text>
          <Text>私の使命は、エイミーのサービスを使っていただく皆様へ唯一無二の価値をお届けすること。一緒に働く社員にとっては、オフィスが常に居心地の良い場所であり、仕事と遊びに全力を投じられる環境を構築することです。常にやりがいや好奇心を持って、新しいサービスを創造することが大切だと考えています。</Text>
          <Text>まだ誰も知らない。だけどあったら便利で手放せなくなるような、永く愛されるサービスを開発することが、エイミーの目指すべき未来です。目の前にある課題を一つずつクリアし、目標に向け継続的に邁進する粘り強さと想いがあれば、必ずや「世の中の役に立つ面白いサービスが作れる」と信じています。</Text>
          <Text>まずは同じ志のもとに集った頼もしい仲間たちと一緒に、これからしっかりと基盤を固め、一歩一歩着実に歩みを進めて参ります。</Text>
          <Author>エイミー株式会社 CEO：竹本 裕佑</Author>
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/ph_about_ceo.jpg"
          alt="concept"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
  </Wrapper>
);

export default TopRecruitBanner;
