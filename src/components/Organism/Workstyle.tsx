import * as React from "react";
import styled from "@emotion/styled";
import Link from "@/components/Atom/Link";
import media from "@/util/breakpoint";

const Wrapper = styled.ul`
  width: 100%;
  margin-bottom: 60px;

  ${media.lessThan("lg")`
    padding: 0 3vw;
  `}
`;
const List = styled.li`
  width: 100%;

  &:nth-of-type(n + 2) {
    margin-top: 40px;
  }
`;
const Order = styled.ol`
  width: 100%;
  margin-top: 10px;
  padding: 0 15px;
  counter-reset: item;

  ${media.lessThan("sm")`
    padding: 0;
  `}

  & > li {
    width: 100%;
    padding-left: 30px;
    position: relative;
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-align: left;

    ${media.lessThan("lg")`
      font-size: 1.4rem;
      line-height: 2rem;
    `}

    &:nth-of-type(n + 2) {
      margin-top: 10px;
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      letter-spacing: 0.2rem;
      counter-increment: item;
      content: "(" counter(item) ")";
    }
  }
`;
const Heading = styled.h2`
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 5px;
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 2.2rem;
  text-align: left;
  border-bottom: solid 1px #e3e3e3;
`;
const SubTitle = styled.h3`
  width: 100%;
  margin-top: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.2rem;
  text-align: left;
`;
const Comment = styled.p`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.2rem;
  text-align: left;

  ${media.lessThan("lg")`
    font-size: 1.4rem;
    line-height: 2rem;
  `}

  &:nth-of-type(n + 2) {
    margin-top: 10px;
  }
`;

const StyledLink = styled(Link)``;

const Works = () => (
  <>
    <Wrapper>
      <List>
        <Heading>事務所案内</Heading>
        <Comment>
          新橋駅から徒歩1分というアクセスの良さ！コワーキングスペースを利用することが可能です。
        </Comment>
      </List>
      <List>
        <Heading>便利な制度</Heading>
        <Order>
          <List>
            時差出勤制度
            <Comment>8～10時までの間で自由な時間に出社できます。</Comment>
          </List>
          <List>
            年次有給休暇前借制度
            <Comment>入社後すぐに3日分の年次有給休暇を前借出来ます。</Comment>
          </List>
          <List>
            1時間単位の年次有給休暇取得制度
            <Comment>
              年間40時間を上限として1時間単位での年次有給休暇取得が可能です。
            </Comment>
          </List>
        </Order>
      </List>
      <List>
        <Heading>テレワーク制度</Heading>
        <Comment>
          オフィスや自宅など働く場所を選択できます。2020年2月末（緊急事態宣言が行われる前）に社員の健康を考えテレワークに切り替えました。
          テレワークの強要は本意ではなく、コロナウイルスが落ち着いたら見直しを行います。
        </Comment>
      </List>
      <List>
        <Heading>昼食補助</Heading>
        <Comment>
          チケットレストランを導入しており、業務中に昼休憩を取得する社員は在宅勤務・事務所勤務問わず昼食の補助が取得できます。
          毎月7500円分がカードにチャージされてたくさんのお店で利用することが出来ます。
        </Comment>
      </List>
      <List>
        <Heading>ボードゲーム</Heading>
        <Comment>
          定期的に業務後に社員でボードゲームを開催しています。現在はコロナウイルスの影響で3密を避けるため休部中です。
        </Comment>
      </List>
      <List>
        <Heading>多様な働き方</Heading>
        <Comment>
          育児や介護のための短時間での正社員や、週の半分を別の企業で働くなど様々な働き方を応援しています。
        </Comment>
      </List>
    </Wrapper>
  </>
);

export default Works;
