import * as React from "react";
import styled from "@emotion/styled";
import PRBlock from "@/components/Molecule/PRBlock";

const StyledLink = styled.a``;

const Wrapper = styled.div`
  margin: 60px 0;
`;

const HorizontalLine = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #efefef;
`;

const NewsPR = () => (
  <Wrapper>
    <PRBlock>
      <PRBlock.Header dateTime={new Date("2019-10-07T00:00:00.000+09:00")} />
      <PRBlock.Body>
        <StyledLink
          target="_blank"
          href="https://prtimes.jp/main/html/rd/p/000000002.000049176.html"
        >
          IoTや電子工作の知識共有サービス「elchika（エルチカ）」をリリース！電子工作を趣味とする人のためのナレッジ投稿サイト
        </StyledLink>
      </PRBlock.Body>
    </PRBlock>
    <HorizontalLine />
  </Wrapper>
);

export default NewsPR;
