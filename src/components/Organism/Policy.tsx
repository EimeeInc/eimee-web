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
        <Comment>
          エイミー株式会社（以下「当社」といいます。）は、個人情報の有用性と個人情報保護の重要性を深く認識し、個人情報を適法かつ適切に取り扱い、保護することが当社の社会的責務と考えております。
        </Comment>
        <Comment>
          この責務を果たすため、当社は、当社が提供するサービス（以下「当社サービス」といいます。）におけるユーザーの個人情報の取り扱いについて、以下に掲げる個人情報保護方針を定め、個人情報の保護に努めてまいります。
        </Comment>
      </List>
      <List>
        <Heading>関係法令・ガイドライン等の遵守</Heading>
        <Comment>
          当社は、「個人情報の保護に関する法律」（以下「個人情報保護法」といいます。）その他の関連法令及び「個人情報の保護に関する法律についてのガイドライン」その他のガイドラインを遵守いたします。
        </Comment>
      </List>
      <List>
        <Heading>個人情報の定義</Heading>
        <Comment>
          当社では、当社サービスを通じてユーザーから取得するユーザー個人を識別できる情報（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を個人情報と定義します。
        </Comment>
      </List>
      <List>
        <Heading>個人情報の取得</Heading>
        <Comment>
          当社は、適切な方法で個人情報を取得します。不正な手段や偽って個人情報を取得することはありません。
        </Comment>
      </List>
      <List>
        <Heading>個人情報の利用</Heading>
        <Comment>
          当社は、当社サービスを通じて取得したユーザーの個人情報を以下の目的にのみ使用し、当該目的以外の利用または提供は行いません。
        </Comment>
        <Order>
          <List>利用規約に基づき、当社サービスを適切に運営するため</List>
          <List>ユーザーの本人確認のため</List>
          <List>
            当社サービスおよびその他当社サービスに関連する情報、キャンペーン等の提供のため
          </List>
          <List>当社サービスの運営上必要な事項を通知するため</List>
          <List>
            ユーザー各々の行動・性別・趣味嗜好等を考慮したサービスまたは広告を配信するため
          </List>
          <List>個人を識別できない形式に加工した統計データを作成するため</List>
          <List>当社サービスの利用促進、改善、新サービスの開発等のため</List>
          <List>契約または法令等に基づく権利の行使および義務の履行のため</List>
          <List>当社サービスに関連する各種問い合わせに対応するため</List>
        </Order>
      </List>
      <List>
        <Heading>個人情報の第三者提供</Heading>
        <Comment>
          当社は、以下のいずれかに該当する場合を除き、利用目的の達成に必要な範囲を超えて個人情報を第三者へ開示または提供することはありません。
        </Comment>
        <Order>
          <List>利用者の同意があるとき</List>
          <List>法令等により認められたとき</List>
          <List>
            人の生命または身体もしくは財産の保護のために必要な場合で、ユーザーの同意を得るのが困難なとき
          </List>
          <List>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
          </List>
          <List>
            当社サービスの運営上必要だと当社が判断した場合で、弁護士等の当社と秘密保持義務を負うものに対して開示するとき
          </List>
          <List>
            合併その他の事由による事業の承継の際に、事業を承継する者に対して開示するとき
          </List>
        </Order>
      </List>
      <List>
        <Heading>統計処理されたデータの利用</Heading>
        <Comment>
          当社は、ユーザーの個人情報をもとに、個人を特定できないよう加工した統計データを作成することがあります。個人を特定できない統計データについては、当社は何ら制限なく利用することができるものとします。
        </Comment>
      </List>
      <List>
        <Heading>個人情報の安全管理</Heading>
        <Comment>
          当社は個人情報の安全管理について、業務遂行に必要な範囲内で権限を与えられた者のみが個人情報を取り扱うものとし、個人情報の漏洩または毀損の防止を図り、個人情報の適切な管理を行います。
        </Comment>
      </List>
      <List>
        <Heading>個人情報の取扱いの委託</Heading>
        <Comment>
          当社は、利用目的の達成に必要な範囲内において、取得した個人情報の取り扱いの全部または一部を委託する場合があります。その場合は、委託先に対して、個人情報の保護について厳格な契約条件の下に開示するとともに、個人情報の保護及び維持管理について指示・監督を行います。
        </Comment>
      </List>
      <List>
        <Heading>個人情報の開示・訂正・削除要請</Heading>
        <Comment>
          当社は、利用者が個人情報の利用目的の通知・開示・追加・削除・利用停止・消去・第三者提供の停止等の請求を行う場合には、個人情報保護法その他の日本の法令等に基づいて当社所定の方法で対応します。
        </Comment>
      </List>
      <List>
        <Heading>個人情報保護方針の変更</Heading>
        <Comment>
          当社は、必要に応じて、本個人情報保護方針の内容を変更することができるものとします。変更した場合には、本ウェブサイトに掲載する方法で通知いたします。ただし、法令上ユーザーの同意が必要となるような場合には、当社所定の方法でユーザーの同意を得るものとします。
        </Comment>
      </List>
      <List>
        <Heading>お問い合せ先</Heading>
        <Comment>
          当社の個人情報の取り扱いにつきましてご意見、ご質問がございましたら、
          <StyledLink to="/contact/">お問い合わせ</StyledLink>
          までご連絡いただきますよう、お願い申し上げます。
        </Comment>
      </List>
    </Wrapper>
  </>
);

export default Works;
