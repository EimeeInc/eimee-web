import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import routings from "@/util/routings";
import Banner from "@/components/Atom/Banner";
import Link from "@/components/Atom/Link";

const Wrapper = styled.footer`
  color: #ffffff;
  background-color: #3b3b3b;
  padding: 50px 60px;

  ${media.lessThan("md")`
    padding: 30px 5px;
  `}
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  max-width: 1920px;
  margin: 0 auto;

  & > * {
    flex: none;
    width: calc(100% / 3);
  }

  ${media.lessThan("lg")`
    flex-direction: column;
    align-items: center;

    & > * {
      width: auto;
    }
  `}
`;

const InfomationContainer = styled.div``;

const Logo = styled.img`
  display: block;
  max-width: 300px;
  margin-bottom: 20px;

  ${media.lessThan("lg")`
    margin-right: auto;
    margin-left: auto;
  `}
`;

const CompanyName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;

const CompanyAddress = styled.p`
  font-size: 1.5rem;

  ${media.lessThan("lg")`
    margin-bottom: 30px;
  `}
`;

const List = styled.ul`
  flex: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 300px;
  height: 100%;
  margin: 0 10px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-left: solid 2px #292929;
  border-right: solid 2px #292929;
  line-height: 1;
  color: #ffffff;

  ${media.lessThan("lg")`
    padding-bottom: 0;
    border-left: none;
    border-right: none;
  `}
`;

const ListItem = styled.li`
  flex-grow: 1;
  width: 50%;
  padding: 6px 11px;

  ${media.lessThan("lg")`
    border: solid 0.5px #292929;
  `}
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  color: #df944c;

  &:before {
    content: "\f111";
    display: inline-block;
    margin-right: 5px;
    color: inherit;
    font-size: 1rem;
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
  }

  &:hover {
    transform: translateX(5px);
    color: #fcfcfc;
    transition: transform 0.4s, color 0.4s;
  }

  & > * {
    vertical-align: middle;
  }
`;

const FooterBanner = styled(Banner)`
  margin-left: 60px;

  & > img {
    width: auto;
  }

  ${media.lessThan("xl")`
  margin-left: 30px;
`}

  ${media.lessThan("lg")`
  margin-left: 0;
  margin-bottom: 30px;
`}
`;

const Copylight = styled.p`
  text-align: center;
`;

const Footer = ({ className }: { className?: string }) => {
  const src = "/assets/img/fun_to_share.png";

  return (
    <Wrapper className={className}>
      <FlexWrapper>
        <InfomationContainer>
          <Logo src="/assets/img/logo_footer.png" alt="ロゴ" />
          <CompanyName>エイミー株式会社</CompanyName>
          <CompanyAddress>
            &#12306;135-0064 東京都江東区青海2-7-4 the SOHO 401
          </CompanyAddress>
        </InfomationContainer>
        <List>
          {Array.from(Object.values(routings)).map(({ label, location }, i) => (
            <ListItem key={i}>
              <StyledLink to={location}>
                <span>{label}</span>
              </StyledLink>
            </ListItem>
          ))}
        </List>
        <div>
          <FooterBanner
            src={src}
            alt="funtoshare"
            to="http://funtoshare.env.go.jp/"
            blank
          />
        </div>
      </FlexWrapper>
      <Copylight>&#169; 2019 Eimee Inc.</Copylight>
    </Wrapper>
  );
};

export default Footer;
