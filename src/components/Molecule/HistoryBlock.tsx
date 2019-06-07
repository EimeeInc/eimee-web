import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import { isArrayLike } from "@/util/is";
import Link from "@/components/Atom/Link";

type HistoryBlockProps = {
  src: string;
  alt: string;
  to?: string;
  blank?: boolean;
  children:
    | [React.ReactElement<HeaderProps>, React.ReactElement<BodyProps>]
    | React.ReactElement<BodyProps>;
} & React.HTMLAttributes<HTMLDivElement>;

type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement>;

type HeaderProps = {
  dateTime: Date;
} & React.HTMLAttributes<HTMLDivElement>;

type BodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Image = styled.img<ImageProps>`
  flex: none;
  width: 210px;
  border: 2px solid #efefef;
  pointer-events: none;

  ${media.lessThan("md")`
    width: 120px;
  `}
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
  color: #5fb7f1;
  font-weight: bold;

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

const HistoryBlock = ({
  src,
  to,
  blank,
  children,
  ...props
}: HistoryBlockProps) => {
  const LinkProps = { to, blank };
  const HeaderContents = isArrayLike(children)
    ? (children[0] as React.ReactElement<HeaderProps>)
    : null;
  const BodyContents = (isArrayLike(children)
    ? children[1]
    : children) as React.ReactElement<HeaderProps>;
  const date = HeaderContents ? HeaderContents.props.dateTime : null;
  const dateStr = date
    ? `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    : null;

  return (
    <Wrapper {...props}>
      <Image src={src} />
      <TextContainer>
        {date && <Header dateTime={date.toISOString()}>{dateStr}</Header>}
        {<Body>{BodyContents}</Body>}
        {to && <TextLink {...LinkProps}>{to}</TextLink>}
      </TextContainer>
    </Wrapper>
  );
};

HistoryBlock.Header = ({ children }: HeaderProps) => <>{children}</>;

HistoryBlock.Body = ({ children }: BodyProps) => <>{children}</>;

export default HistoryBlock;
