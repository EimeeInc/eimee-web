import * as React from "react";
import styled from "@emotion/styled";
import DefinitionBlock from "@/components/Molecule/DefinitionBlock";
import DefinitionCard from "@/components/Atom/DefinitionCard";

const StyledLine = styled.p``;

const CompanySummary = () => (
  <DefinitionCard>
    <DefinitionBlock>
      <DefinitionBlock.Header>会社名</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>エイミー株式会社</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>英文表記</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>Eimee Inc.</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>所在地</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>本社</StyledLine>
        <StyledLine>〒135-0064 東京都江東区青海2-7-4 the SOHO 401</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>代表者</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>竹本 裕佑</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>設立</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>2012年</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>資本金</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>500万円(2014年9月30日現在)</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>取引先</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>・株式会社アドウェイズ</StyledLine>
        <StyledLine>・株式会社インタースペース</StyledLine>
        <StyledLine>・グーグル株式会社</StyledLine>
        <StyledLine>・バリューコマース株式会社</StyledLine>
        <StyledLine>・ヤフー株式会社</StyledLine>
        <StyledLine>・リンクシェア・ジャパン株式会社</StyledLine>
        <StyledLine>※五十音順</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>取引銀行</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>・みずほ銀行</StyledLine>
        <StyledLine>・名古屋銀行</StyledLine>
        <StyledLine>・ジャパンネット銀行</StyledLine>
        <StyledLine>・住信SBIネット銀行</StyledLine>
        <StyledLine>・ゆうちょ銀行</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
  </DefinitionCard>
);

export default CompanySummary;
