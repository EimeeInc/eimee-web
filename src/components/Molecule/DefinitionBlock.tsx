import * as React from "react"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"
import Link from "@/components/Atom/Link"

type DefinitionBlockProps = {
  to?: string,
  blank?: boolean,
} & React.HTMLAttributes<HTMLDivElement>;

type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement>;

type HeaderProps = {} & React.HTMLAttributes<HTMLDivElement>;

type BodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${media.lessThan("md")`
    flex-direction: column;
  `}
`;

const Image = styled.img<ImageProps>`
  flex: none;
  width: 450px;
  border: 2px solid #efefef;
  pointer-events: none;

  ${media.lessThan("xl")`
    width: 300px;
  `}

  ${media.lessThan("lg")`
    width: 220px;
  `}

  ${media.lessThan("md")`
    width: 100%;
  `}
`;

const TextContainer = styled.div`
  flex: auto;
  width: 100%;
  margin-top: 0;
  margin-left: 50px;

  ${media.lessThan("md")`
    margin-top: 30px;
    margin-left: 0;
  `}
`;

const Header = styled.div<HeaderProps>`
display: inline-block;
  margin-bottom: 20px;
  font-size: 3.4rem;
  font-weight: bold;

  ${media.lessThan("xl")`
    margin-bottom: 15px;
    font-size: 2.4rem;
  `}

  ${media.lessThan("lg")`
    font-size: 3.0rem;
  `}

  ${media.lessThan("md")`
    font-size: 1.8rem;
  `}

  ${media.lessThan("sm")`
    margin-bottom: 17px;
    font-size: 1.9rem;
  `}
`;

const Body = styled.div<BodyProps>`
  font-size: 1.7rem;
  line-height: 2.1;

  ${media.lessThan("xl")`
    font-size: 1.4rem;
    line-height: 1.5;
  `}

  ${media.lessThan("sm")`
    font-size: 1.5rem;
  `}
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

const ImageLink = styled(Link)`
  flex: none;

  ${media.lessThan("md")`
    width: 100%;
  `}
`;

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

const isReactElement = <T extends {}>(value: any): value is React.ReactElement<T> => value && typeof value.type === "function";
const isReactNodeArray = (value: any): value is React.ReactNodeArray => value && value.length && value.find;

const DefinitionBlock = ({ to, blank, children, ...props }: DefinitionBlockProps) => {
  const LinkProps = { to, blank };
  const Image = isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.Image) || null;
  const Header = isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.Header) || null;
  const Body = isReactNodeArray(children) && children.find(x => isReactElement(x) && x.type === DefinitionBlock.Body) || null;

  return (
    <Wrapper { ...props }>
      {
        to ? <ImageLink { ...LinkProps }>{Image}</ImageLink> : Image
      }
      <TextContainer>
        {
          to ? <HeaderLink { ...LinkProps }>{Header}</HeaderLink> : Header
        }
        { Body }
        <TextLink { ...LinkProps }>{to}</TextLink>
      </TextContainer>
    </Wrapper>
  );
};

DefinitionBlock.Image = ({ ...props } : ImageProps) => (
  <Image { ...props }/>
);

DefinitionBlock.Header = ({ children, ...props } : HeaderProps) => (
  <Header { ...props }>
    {children}
  </Header>
);

DefinitionBlock.Body = ({ children, ...props } : BodyProps) => (
  <Body { ...props }>
    {children}
  </Body>
);

export default DefinitionBlock
