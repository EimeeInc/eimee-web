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
          <List>ユーザーの同意があるとき</List>
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
          当社は、ユーザーが個人情報の利用目的の通知・開示・追加・削除・利用停止・消去・第三者提供の停止等の請求を行う場合には、個人情報保護法その他の日本の法令等に基づいて当社所定の方法で対応します。
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
      <List>
        <Heading>Cookieと広告の配信</Heading>
        <Comment>
          当社サービスでは、サービス向上を目的として、Cookie（クッキー）を利用しています。Cookieとは、Webサイトの提供者がブラウザを通じてユーザーの通信機器に一時的にデータを記録しユーザーを識別する仕組みです。
        </Comment>
        <Comment>
          ユーザーがCookieの利用を希望しない場合は、サービスを閲覧するブラウザで設定できます。なお、当社サービスでは、Cookieの利用を前提としてサービスを提供しているため、Cookieを利用しない場合は当社サービスの一部が利用できなくなることがあります。
          また、当社サービスでは、GoogleやTwitterなどの第三者配信事業者が提供する広告サービスを利用しています。これらは効果的な広告配信などを目的とする上でCookieを利用することがあります。第三者配信業者によるCookieの取得を中止したい場合には、以下の第三者配信業者のページにからCookie（クッキー）を無効化してください。
        </Comment>
        <SubTitle>Googleが提供するサービスの利用について</SubTitle>
        <Comment>
          当社は、当社サービスの利用状況に応じてGoogle
          AdWords広告を表示します。また、当社サービスのサイトコンテンツの改善を目的に、Googleアナリティクスの下記に記載する広告向け機能を使ってアクセス情報を収集しています。収集した情報で個人を識別することはなく、サイトの利用動向を分析するために用いられます。
        </Comment>
        <Comment>
          ・Google アナリティクス リマーケティング
          <br />
          ・Google ディスプレイネットワークの表示回数レポート
          <br />
          ・Google
          アナリティクスのユーザーの分布とインタレストカテゴリに関するレポート
          <br />
          ・Google
          アナリティクスを使用して広告Cookieと匿名IDを使ったデータを収集する統合的なサービス
        </Comment>
        <Comment>
          詳細については
          <StyledLink
            rel="noopener noreferrer"
            blank
            to="http://www.google.com/analytics/terms/jp.html"
          >
            Googleアナリティクス利用規約
          </StyledLink>
          、およびGoogleアナリティクスの
          <StyledLink
            rel="noopener noreferrer"
            blank
            to="http://www.google.co.jp/policies/privacy/"
          >
            プライバシーポリシー
          </StyledLink>
          をご確認ください。 Googleの広告の設定やCookieの使用を無効にする際は
          <StyledLink
            rel="noopener noreferrer"
            blank
            to="https://policies.google.com/technologies/ads?hl=ja"
          >
            こちら
          </StyledLink>
          をご覧ください。
        </Comment>
        <SubTitle>
          Twitterのコンバージョントラッキング、およびカスタムオーディエンスを利用した広告配信について
        </SubTitle>
        <Comment>
          当社は、当社サービスの利用状況に応じて、TwitterおよびTwitterパートナー上で、ユーザーの興味関心をターゲティングした広告を表示します。詳細については
          <StyledLink
            rel="noopener noreferrer"
            blank
            to="https://business.twitter.com/ja/help/ads-policies/other-policy-requirements/policies-for-conversion-tracking-and-tailored-audiences.html"
          >
            コンバージョントラッキングとテイラードオーディエンスに関するポリシー
          </StyledLink>
          をご確認ください。広告に関するプライバシー設定については
          <StyledLink
            rel="noopener noreferrer"
            blank
            to="https://support.twitter.com/articles/20170405"
          >
            カスタマイズされた広告の表示設定
          </StyledLink>
          をご覧ください。
        </Comment>
      </List>
      <List>
        <Heading>免責事項</Heading>
        <Comment>
          当社サービスが掲載する情報、コンテンツは可能な限り正確な情報を掲載するように努めていますが、情報が更新されていたり誤りがある場合があります。当社サービスの利用によって生じた不利益や損害について一切の責任を負いかねます。
        </Comment>
      </List>
    </Wrapper>
  </>
);

export default Works;
