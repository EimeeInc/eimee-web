import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

type GraphBlockProps = {
  src: string;
  alt: string;
  children: React.ReactElement<HeaderProps>;
} & React.HTMLAttributes<HTMLDivElement>;

type HeaderProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  ${media.lessThan("md")`
    flex-direction: column;
  `}
`;

const Image = styled.img`
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 3rem;

  ${media.lessThan("sm")`
    font-size: 2.5rem;
  `}
`;

const GraphBlock = ({ src, alt, children, ...props }: GraphBlockProps) => {
  const Header = children;

  return (
    <Wrapper {...props}>
      <StyledHeader>{Header}</StyledHeader>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

GraphBlock.Header = ({ children }: HeaderProps) => <>{children}</>;

export default GraphBlock;
