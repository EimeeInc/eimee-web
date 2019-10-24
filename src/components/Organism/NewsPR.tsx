import * as React from "react";
import styled from "@emotion/styled";
import PRBlock from "@/components/Molecule/PRBlock";

const StyledLine = styled.p``;

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
      <PRBlock.Header dateTime={new Date("2012-10-01T00:00:00.000+09:00")} />
      <PRBlock.Body>
        <StyledLine>
          ダブルアールシステムズ株式会社を愛知県名古屋市に設立
        </StyledLine>
      </PRBlock.Body>
    </PRBlock>
    <HorizontalLine />
  </Wrapper>
);

export default NewsPR;
