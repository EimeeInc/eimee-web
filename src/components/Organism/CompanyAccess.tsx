import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import Icon from "@/components/Atom/Icon";
import SubCardTitle from "@/components/Atom/SubCardTitle";

type HeaderIconProps = {
  src: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 60px;

  ${media.lessThan("md")`
    flex-direction: column;
    align-items: center;
  `}
`;

const Map = styled.iframe`
  flex: auto;
  width: 100%;
  height: 300px;
`;

const SubCard = styled.div`
  flex: none;
  width: 380px;
  margin-left: 20px;

  ${media.lessThan("lg")`
    width: 330px;
  `}

  ${media.lessThan("md")`
    width: 100%;
    margin-top: 20px;
    margin-left: 0;
  `}
`;

const SubCardBody = styled.div`
  margin-bottom: 1.1em;
  line-height: 1.8;
  font-size: 1.5rem;
`;

const StyledLine = styled.p`
  display: flex;
  align-items: center;
`;

const HeaderIcon = ({ src, children, ...props }: HeaderIconProps) => (
  <Icon src={src} size="3rem" {...props} />
);
const TrainIcon = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <HeaderIcon src="/assets/img/ico_train.png" {...props} />
);
const WalkIcon = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <Icon src="/assets/img/ico_walk.png" size="2.2rem" {...props} />
);

const CompanyAccess = () => (
  <Wrapper>
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.384878809149!2d139.75689263388466!3d35.66752403643041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8022b7dc11%3A0xa501a12a8632ba87!2z44OT44K444ON44K544Ko44Ki44Od44O844OI5paw5qmLIOOCs-ODr-ODvOOCreODs-OCsOOCueODmuODvOOCuSDjgrfjgqfjgqLjgqrjg5XjgqPjgrkg44Os44Oz44K_44Or44Kq44OV44Kj44K5!5e0!3m2!1sja!2sjp!4v1588301673673!5m2!1sja!2sjp"
      frameBorder="0"
      allowFullScreen
    />
    <SubCard>
      <SubCardTitle>
        <TrainIcon />
        JR・東京メトロ銀座線
      </SubCardTitle>
      <SubCardBody>
        <StyledLine>
          JR「新橋」駅 銀座口
          <WalkIcon />
          徒歩1分
        </StyledLine>
        <StyledLine>
          東京メトロ「新橋」駅 5番出口
          <WalkIcon />
          徒歩1分
        </StyledLine>
      </SubCardBody>
    </SubCard>
  </Wrapper>
);

export default CompanyAccess;
