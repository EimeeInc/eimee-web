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
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2012-10-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>
          ダブルアールシステムズ株式会社を愛知県名古屋市に設立
        </StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2012-11-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>クレジットカード比較サイト「ヒカキュー」を開始</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2014-12-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>本社を東京都江東区に移転</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2016-08-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>エイミー株式会社に商号変更</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2017-03-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>
          ユーザーとお店が繋がる口コミSNS「クチコム」を開始
        </StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2019-04-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>お茶で彩る生活マガジン「CHAzine」を開始</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
    <HorizontalLine />
    <HistoryBlock>
      <HistoryBlock.Header
        dateTime={new Date("2019-10-01T00:00:00.000+09:00")}
      />
      <HistoryBlock.Body>
        <StyledLine>電子工作ナレッジ共有サイト「elchika」を開始</StyledLine>
      </HistoryBlock.Body>
    </HistoryBlock>
  </Wrapper>
);

export default CompanyHistory;
