import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

type StaffBlockProps = {
  src: string;
  alt: string;
  children: React.ReactElement[];
} & React.HTMLAttributes<HTMLDivElement>;

type HeaderProps = {
  job:
    | "CEO・企画・営業"
    | "チーフエンジニア"
    | "Webディレクター"
    | "企画・ライター"
    | "Webデザイナー"
    | "企画"
    | "エンジニア";
} & React.HTMLAttributes<HTMLDivElement>;

type BodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div`
  ${media.lessThan("md")`
    flex-direction: column;
  `}
`;

const Image = styled.img`
  width: 100%;
  background-color: #76bbdc;
`;

const Job = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #6f6f6f;
  font-size: 1.6rem;
  font-weight: bold;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 2.3rem;
  font-weight: bold;
`;

const StyledBody = styled.div<BodyProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 35px 15px;
  font-size: 1.6rem;
  line-height: 1.8;
  background-color: #f1f1f1;
  background-image: url("/assets/img/ico_enthusiasm_ntf.svg");
  background-repeat: no-repeat;
  background-size: 170px auto;
  background-position: center 20px;
`;

const StaffBlock = ({ src, alt, children, ...props }: StaffBlockProps) => {
  const Header = children.find(
    x => x.type === StaffBlock.Header,
  ) as React.ReactElement<HeaderProps>;
  const Body = children.find(
    x => x.type === StaffBlock.Body,
  ) as React.ReactElement<BodyProps>;

  return (
    <Wrapper {...props}>
      <Image src={src} alt={alt} />
      <Job>{Header.props.job}</Job>
      <StyledHeader>{Header}</StyledHeader>
      <StyledBody>{Body}</StyledBody>
    </Wrapper>
  );
};

StaffBlock.Header = ({ children }: HeaderProps) => <>{children}</>;

StaffBlock.Body = ({ children }: BodyProps) => <>{children}</>;

export default StaffBlock;
