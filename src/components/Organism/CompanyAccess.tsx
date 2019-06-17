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
const CityBusIcon = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <HeaderIcon src="/assets/img/ico_bus.png" {...props} />
);
const TimeBusIcon = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <HeaderIcon src="/assets/img/ico_bus_time.png" {...props} />
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
      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3243.3924765263528!2d139.7729349156671!3d35.61804983020901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x601889ffac21ca29%3A0x9a2bbabe0f145d9b!2z44CSMTM1LTAwNjQg5p2x5Lqs6YO95rGf5p2x5Yy66Z2S5rW377yS5LiB55uu77yX4oiS77yUIO-9lO-9iO-9he-8s--8r--8qO-8rw!3m2!1d35.6180814!2d139.7751922!5e0!3m2!1sja!2sjp!4v1466660334184"
      frameBorder="0"
      allowFullScreen
    />
    <SubCard>
      <SubCardTitle>
        <TrainIcon />
        東京臨海新交通ゆりかもめ
      </SubCardTitle>
      <SubCardBody>
        <StyledLine>
          「船の科学館」駅
          <WalkIcon />
          徒歩5分
        </StyledLine>
        <StyledLine>
          「テレコムセンター」駅
          <WalkIcon />
          徒歩5分
        </StyledLine>
      </SubCardBody>
      <SubCardTitle>
        <CityBusIcon />
        都営バス海01系統
      </SubCardTitle>
      <SubCardBody>
        <StyledLine>
          「日本科学未来館前」バス停
          <WalkIcon />
          徒歩1分
        </StyledLine>
      </SubCardBody>
      <SubCardTitle>
        <TimeBusIcon />
        「タイム24ビル」行き平日無料循環バス
      </SubCardTitle>
      <SubCardBody>
        <StyledLine>
          「タイム24ビル」バス停
          <WalkIcon />
          徒歩5分
        </StyledLine>
      </SubCardBody>
    </SubCard>
  </Wrapper>
);

export default CompanyAccess;
