import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

type DefinitionBlockProps = {
  children: React.ReactElement[];
} & React.HTMLAttributes<HTMLDivElement>;

type HeaderProps = {} & React.HTMLAttributes<HTMLDivElement>;

type BodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  ${media.lessThan("md")`
    flex-direction: column;
  `}
`;

const StyledHeader = styled.div<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 2.4rem;
  font-weight: bold;
  background-color: #f1f1f1;

  ${media.lessThan("lg")`
    font-size: 2.2rem;
  `}

  ${media.lessThan("sm")`
    padding: 15px 0;
    margin-bottom: 17px;
    font-size: 1.9rem;
  `}
`;

const StyledBody = styled.div<BodyProps>`
  padding: 25px 15px 35px 15px;
  font-size: 1.55rem;
  line-height: 1.8;
`;

const DefinitionBlock = ({ children, ...props }: DefinitionBlockProps) => {
  const Header = children.find(
    x => x.type === DefinitionBlock.Header,
  ) as React.ReactElement<HeaderProps>;
  const Body = children.find(
    x => x.type === DefinitionBlock.Body,
  ) as React.ReactElement<BodyProps>;

  return (
    <Wrapper {...props}>
      <StyledHeader>{Header}</StyledHeader>
      <StyledBody>{Body}</StyledBody>
    </Wrapper>
  );
};

DefinitionBlock.Header = ({ children }: HeaderProps) => <>{children}</>;

DefinitionBlock.Body = ({ children }: BodyProps) => <>{children}</>;

export default DefinitionBlock;
