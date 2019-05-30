import * as React from "react"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"
import Link from "@/components/Atom/Link"

type DefinitionBlockProps = {
  to?: string,
  blank?: boolean,
} & React.HTMLAttributes<HTMLDivElement>;

type ImageProps = {
  src: string,
} & React.HTMLAttributes<HTMLDivElement>;

type TitleProps = {} & React.HTMLAttributes<HTMLDivElement>

type BodyProps = {} & React.HTMLAttributes<HTMLParagraphElement>

type PublsihDateProps = {
  dateTime: Date,
} & React.ImgHTMLAttributes<HTMLTimeElement>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4 - 10px);
  height: 250px;

  ${media.lessThan("xl")`
    width: calc(100% / 3 - 5px);
  `}

  &:nth-of-type(n+4) {
    ${media.lessThan("xl")`
      margin-top: 10px;
    `}

    ${media.lessThan("lg")`
      margin-top: 0;
    `}
  }

  ${media.lessThan("lg")`
    width: calc(100% / 2 - 20px);
    height: 280px;
  `}

  &:nth-of-type(n+3) {
    ${media.lessThan("lg")`
      margin-top: 10px;
    `}

    ${media.lessThan("sm")`
      margin-top: 0;
    `}
  }

  ${media.lessThan("md")`
    width: calc(100% / 2 - 5px);
    height: 250px;
  `}

  ${media.lessThan("sm")`
    width: 90%;
    height: 280px;
  `}

  &:not(:first-of-type) {
    ${media.lessThan("sm")`
      margin-top: 10px;
    `}
  }
`;

const Footer = styled.div`
  min-height: 70px;
  padding: 15px;
  font-size: 1.5rem;
  background-color: #f0cd6c;
`;

const Time = styled.time`
  display: block;
  color: #ffffff;
  font-weight: bold;
`;

const Title = styled.div<TitleProps>`
`;

const ImageWrapper = styled.div`
  flex: auto;
  position: relative;
  width: 100%;
`

const Image = styled.div<ImageProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-position: center top;
  background-size: cover;

  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background-color: #313131;
  }

  &:before {
    transform: skew(-30deg) translateX(-100%);
    transition: transform 0.6s, opacity 0.6s;
  }

  ${Wrapper.toString()}:hover &:before {
    opacity: 0.9;
    transform: scaleX(0.5) translateX(-50%);
    transition: transform 0.3s, opacity 0.3s;
  }

  &:after {
    transform: skew(-30deg) translateX(100%);
    transition: transform 0.6s, opacity 0.6s;
  }

  ${Wrapper.toString()}:hover &:after {
    opacity: 0.9;
    transform: scaleX(0.5) translateX(50%);
    transition: transform 0.3s, opacity 0.3s;
  }
`;

const BodyWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px 20px;
  opacity: 0;

  ${Wrapper.toString()}:hover & {
    opacity: 1;
    transition: opacity 0.3s 0.3s;
  }
`

const Body = styled.p<BodyProps>`
  line-height: 1.6;
  font-size: 1.6rem;
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  font-size: 1.4rem;
  color: #4fbcfb;
`;

const isReactElement = <T extends {}>(value: any): value is React.ReactElement<T> => value && typeof value.type === "function";
const isReactNodeArray = (value: any): value is React.ReactNodeArray => value && value.length && value.find;

const DefinitionBlock = ({ to, blank, children, ...props }: DefinitionBlockProps) => {
  const Title = (isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.Title)) || null;
  const Body = (isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.Body)) || null;
  const Image = (isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.Image)) || null;
  const PublsihDate = (isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.PublsihDate)) || null;

  return (
    <Wrapper { ...props }>
      <ImageWrapper>
        {Image}
        <BodyWrapper>
          { Body }
          <StyledLink to={to} blank={blank}>{to}</StyledLink>
        </BodyWrapper>
      </ImageWrapper>
      <Footer>
        { PublsihDate }
        { Title }
      </Footer>
    </Wrapper>
  );
};

DefinitionBlock.Image = ({ src, ...props } : ImageProps) => (
  <Image src={src} {...props} />
);

DefinitionBlock.PublsihDate = ({ dateTime, ...props } : PublsihDateProps) => (
  <Time dateTime={ dateTime.toISOString() } { ...props }>{ `${dateTime.getFullYear()}.${dateTime.getMonth()+1}.${dateTime.getDate()}` }</Time>
);

DefinitionBlock.Title = ({ children, ...props } : TitleProps) => (
  <Title { ...props }>
    {children}
  </Title>
);

DefinitionBlock.Body = ({ children, ...props } : BodyProps) => (
  <Body { ...props }>
    {children}
  </Body>
);

export default DefinitionBlock
