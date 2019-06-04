import * as React from "react";
import styled from "@emotion/styled";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import DefinitionBlock from "@/components/Molecule/DefinitionBlock";

const Wrapper = styled.div`
  margin: 50px 0;
`;

const TopRecruitBanner = ({ className }: { className?: string }) => (
  <Wrapper className={className}>
    <FadeInEnteringCard>
      <DefinitionBlock>
        <DefinitionBlock.Header>
          Aiming at Small Richness<br />
          あなたの日々にほんの少しの豊かさを
        </DefinitionBlock.Header>
        <DefinitionBlock.Body>
          エイミーが開発しているサービスは、皆さんが生きていく上で必要不可欠なアイテムだとは言えません。しかしエイミーのサービスには、皆さんの日々の生活をほんの少し豊かにするための便利さ・快適さ・面白さという、たくさんのアイデアが詰まっています。このコーポレートスローガンには、「エイミーのサービスに触れる皆さんを、幸せで楽しい気持ちにしたい」という想いも込められています。また、目的・志を表す「Aiming(エイミング)」は、社名である「Eimee(エイミー)」の響きに通ずるものもあり、エイミーはこのスローガンを掲げました。
        </DefinitionBlock.Body>
        <DefinitionBlock.Image
          src="/assets/img/about_concept.jpg"
          alt="concept"
        />
      </DefinitionBlock>
    </FadeInEnteringCard>
  </Wrapper>
);

export default TopRecruitBanner;
