import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

type IBackgroundImage = {
  src: string;
};

type WrapperProps = {
  color: string;
};

type CommonHeaderBlockProps = {
  title: string;
  ruby: string;
} & WrapperProps &
  React.HTMLAttributes<HTMLDivElement> &
  IBackgroundImage;

type ImageProps = {} & React.HTMLAttributes<HTMLDivElement> & IBackgroundImage;

type TitleProps = {} & React.HTMLAttributes<HTMLDivElement>;

type RubyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.color};

  ${media.lessThan("md")`
    flex-direction: column;
  `}

  & > * {
    flex: none;
  }
`;

const Image = styled.div<ImageProps>`
  width: 50%;
  height: 100vh;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  ${media.lessThan("lg")`
    display: none;
  `}
`;

const PlainBlock = styled.div<IBackgroundImage>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${media.greaterThan("lg")`
    width: 50%;
    background: none;

    &:before {
      content: none;
    }
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-bottom: 30px;
  padding: 25px 5px;
  z-index: 1;
  color: #ffffff;
  border: solid 8px #ffffff;
  line-height: 1;

  ${media.lessThan("xl")`
    width: 400px;
  `}

  ${media.lessThan("lg")`
    width: 500px;
  `}

  ${media.lessThan("md")`
    width: 400px;
  `}

  ${media.lessThan("sm")`
    margin-left: 5px;
    margin-right: 5px;
  `}
`;

const Title = styled.div<TitleProps>`
  margin-bottom: 5px;
  font-size: 7rem;

  ${media.lessThan("xl")`
    font-size: 5rem;
  `}

  ${media.lessThan("lg")`
    font-size: 7rem;
  `}

  ${media.lessThan("md")`
    font-size: 5rem;
  `}
`;

const Ruby = styled.div<RubyProps>`
  font-size: 2.5rem;
  font-weight: bold;

  ${media.lessThan("xl")`
    font-size: 2.1rem;
  `}

  ${media.lessThan("lg")`
    font-size: 2.5rem;
  `}

  ${media.lessThan("md")`
    font-size: 2.1rem;
  `}
`;

const CommonHeaderBlock = ({
  title,
  ruby,
  color,
  src,
  children,
  ...props
}: CommonHeaderBlockProps) => {
  return (
    <Wrapper color={color} {...props}>
      <PlainBlock src={src}>
        <TextContainer>
          <Title>{title}</Title>
          <Ruby>{ruby}</Ruby>
        </TextContainer>
      </PlainBlock>
      <Image src={src} />
    </Wrapper>
  );
};

export default CommonHeaderBlock;
