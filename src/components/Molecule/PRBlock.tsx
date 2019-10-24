import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import { isArrayLike } from "@/util/is";
import Link from "@/components/Atom/Link";

type HistoryBlockProps = {
  children:
    | [React.ReactElement<HeaderProps>, React.ReactElement<BodyProps>]
    | React.ReactElement<BodyProps>;
} & React.HTMLAttributes<HTMLDivElement>;

type HeaderProps = {
  dateTime: Date;
} & React.HTMLAttributes<HTMLDivElement>;

type BodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const TextContainer = styled.div`
  flex: auto;
  width: 100%;
  margin-top: 0;
  margin-left: 20px;
  font-size: 1.7rem;
  line-height: 1.5;

  ${media.lessThan("xl")`
    font-size: 1.8rem;
  `}

  ${media.lessThan("sm")`
    font-size: 1.6rem;
  `}
`;

const Header = styled.time`
  display: inline-block;
  margin-bottom: 10px;
  color: #aaaaaa;

  ${media.lessThan("xl")`
    margin-bottom: 7px;
  `}
`;

const Body = styled.div`
  color: #808080;
`;

const TextLink = styled(Link)`
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-left: 30px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -30px;
    top: 50%;
    width: 30px;
    height: 30px;
    pointer-events: none;
    background-image: url(/assets/img/ico_internet.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
`;

const HistoryBlock = ({ children, ...props }: HistoryBlockProps) => {
  const HeaderContents = isArrayLike(children)
    ? (children[0] as React.ReactElement<HeaderProps>)
    : null;
  const BodyContents = (isArrayLike(children)
    ? children[1]
    : children) as React.ReactElement<BodyProps>;
  const date = HeaderContents ? HeaderContents.props.dateTime : null;
  const dateStr = date
    ? `${date.getFullYear()}年${date.getMonth() + 1}月`
    : null;

  return (
    <Wrapper {...props}>
      <TextContainer>
        {date && <Header dateTime={date.toISOString()}>{dateStr}</Header>}
        <Body>{BodyContents}</Body>
      </TextContainer>
    </Wrapper>
  );
};

HistoryBlock.Header = ({ children }: HeaderProps) => <>{children}</>;

HistoryBlock.Body = ({ children }: BodyProps) => <>{children}</>;

export default HistoryBlock;
