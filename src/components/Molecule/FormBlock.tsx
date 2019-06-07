import * as React from "react";
import styled from "@emotion/styled";
import classnames from "classnames";
import media from "@/util/breakpoint";

type HistoryBlockProps = {
  src: string;
  alt: string;
  children: [React.ReactElement<HeaderProps>, React.ReactElement<BodyProps>];
} & React.HTMLAttributes<HTMLDivElement>;

type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement>;

type HeaderProps = {
  required?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type BodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Image = styled.img<ImageProps>`
  flex: none;
  width: 80px;
  height: 80px;
  padding: 5px;
  border-radius: 50%;
  pointer-events: none;
  background-color: #fcfcfc;

  ${media.lessThan("md")`
    width: 60px;
    height: 60px;
    padding: 0;
  `}
`;

const TextContainer = styled.div`
  flex: auto;
  width: 100%;
  margin-top: 0;
  margin-left: 20px;
  line-height: 1.5;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
  font-size: 1.6rem;
  font-weight: bold;

  ${media.lessThan("md")`
    font-size: 1.4rem;
  `}

  &.required:after {
    content: "必須";
    margin-left: 5px;
    border-radius: 3px;
    padding: 2px 10px;
    color: #fcfcfc;
    font-size: 1.15rem;
    font-weight: inherit;
    background-color: #e73820;

    ${media.lessThan("md")`
      padding: 1px 7px;
      font-size: 1.1rem;
    `}
  }
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-height: 60px;
  border-radius: 5px;
  background-color: #fcfcfc;

  ${media.lessThan("md")`
    min-height: 30px;
  `}

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    left: -10px;
    width: 0;
    height: 0;
    border-right: solid 10px #fcfcfc;
    border-top: solid 5px transparent;
    border-bottom: solid 5px transparent;

    ${media.lessThan("md")`
      top: 5px;
    `}
  }

  & > * {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const HistoryBlock = ({
  src,
  alt,
  children: [HeaderContents, BodyContents],
  ...props
}: HistoryBlockProps) => {
  const required = HeaderContents.props.required || false;

  return (
    <Wrapper {...props}>
      <Image src={src} alt={alt} />
      <TextContainer>
        <Header className={classnames({ required })}>{HeaderContents}</Header>
        <Body>{BodyContents}</Body>
      </TextContainer>
    </Wrapper>
  );
};

HistoryBlock.Header = ({ children }: HeaderProps) => <>{children}</>;

HistoryBlock.Body = ({ children }: BodyProps) => <>{children}</>;

export default HistoryBlock;
