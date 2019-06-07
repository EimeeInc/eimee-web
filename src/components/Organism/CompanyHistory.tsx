import * as React from "react";
import styled from "@emotion/styled";
import HistoryBlock from "@/components/Molecule/HistoryBlock";

const StyledLine = styled.p``;

const Wrapper = styled.div`
  margin: 60px 0;
`;

const HorizontalLine = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #efefef;
`;

const CompanyHistory = () => (
  <Wrapper>
    <HistoryBlock src="/assets/img/company_history01.png" alt="history01">
      <HistoryBlock.Body>
        <StyledLine>CEOの誕生</StyledLine>
        <StyledLine>体重：3100g</StyledLine>
        <StyledLine>身長：47.5cm</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock src="/assets/img/company_history02.png" alt="history02">
      <HistoryBlock.Header
        dateTime={new Date("2012-10-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>大人になったので会社を設立</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock
      src="/assets/img/company_history03.png"
      alt="history03"
      to="https://クレジットカードおすすめ比較.net/"
      blank
    >
      <HistoryBlock.Header
        dateTime={new Date("2012-11-21T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>クレジットカードhikaQをリリース</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock src="/assets/img/company_history06.png" alt="history06">
      <HistoryBlock.Header
        dateTime={new Date("2016-04-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>
          オフィスを移転(引っ越し業者を待ちきれなかったCEOはPCだけを持って引っ越しを済ませていた)
        </StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock src="/assets/img/company_history07.png" alt="history07">
      <HistoryBlock.Header
        dateTime={new Date("2017-01-26T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>エイミーWebサイトリニューアル</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock
      src="/assets/img/company_history08.jpg"
      alt="history08"
      to="https://kuchikomu.jp/"
      blank
    >
      <HistoryBlock.Header
        dateTime={new Date("2017-03-30T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>
          ユーザーとお店が繋がる次世代総合口コミSNS「クチコム」をリリース
        </StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
  </Wrapper>
);

export default CompanyHistory;
