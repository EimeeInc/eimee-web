import * as React from "react";
import styled from "@emotion/styled";
import DefinitionBlock from "@/components/Molecule/DefinitionBlock";
import DefinitionCard from "@/components/Atom/DefinitionCard";

const StyledLine = styled.p``;

const RecruitCareerSummary = () => (
  <DefinitionCard>
    <DefinitionBlock>
      <DefinitionBlock.Header>職種</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>・Webエンジニア</StyledLine>
        <StyledLine>・Webデザイナー</StyledLine>
        <StyledLine>・企画</StyledLine>
        <StyledLine>・営業</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>仕事内容</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>
          Webサイトのシステム開発・運用・企画・営業、その他事務業を担当して頂きます。
        </StyledLine>
        <StyledLine>
          既存サービスのシステムリプレイスや改善も一部ありますが、主には新サービスの開発に携わっていただきます。まだ世にない"タノシム"サービスを一緒に作りましょう。
        </StyledLine>
        <br />
        <StyledLine>「具体的には」</StyledLine>
        <StyledLine>・Webサイトのシステム開発</StyledLine>
        <StyledLine>・Webサイトの企画・立案・コンテンツ作成</StyledLine>
        <StyledLine>・コンサルティング営業</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>応募資格</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>実務経験が2年以上ある方</StyledLine>
        <StyledLine>以下のような方歓迎します！</StyledLine>
        <br />
        <StyledLine>・オリジナリティあるデザイン性をお持ちの方</StyledLine>
        <StyledLine>・Webサイトを作ることが好きな方</StyledLine>
        <StyledLine>・世の中を変えるサービスを作ってみたい方</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>勤務地</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>本社</StyledLine>
        <StyledLine>
          &#12306;135-0064 東京都江東区青海2-7-4 the SOHO 401
        </StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>勤務時間</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>9:00～18:00</StyledLine>
        <StyledLine>※休憩1h</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>給与</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>
          月給23万円～(前職・経験・能力を考慮の上、面談により決定します)
        </StyledLine>
        <StyledLine>
          ※時間外手当を30時間分含んでおりますが、極力残業を行わない企業風土のため、残業実績はほとんどありません。
        </StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>諸手当</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>交通費支給(月額上限2万円まで)</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>昇給</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>昇給年1回</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>賞与</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>賞与年2回(決算賞与あり)</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>休日休暇</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>完全週休2日制(土日)</StyledLine>
        <StyledLine>祝日</StyledLine>
        <StyledLine>GW</StyledLine>
        <StyledLine>夏季休暇</StyledLine>
        <StyledLine>年末年始休暇</StyledLine>
        <StyledLine>有給休暇</StyledLine>
        <StyledLine>慶弔休暇</StyledLine>
        <StyledLine>※年間休日125日</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>保険</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>社会保険完備</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>福利厚生</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>健康診断</StyledLine>
        <StyledLine>社屋内フィットネスジム</StyledLine>
        <StyledLine>私服勤務</StyledLine>
        <StyledLine>コーヒー・ドリンク飲み放題</StyledLine>
        <StyledLine>お菓子バスケットあり☆</StyledLine>
        <StyledLine>Bigクリスマスツリーあり♪</StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
    <DefinitionBlock>
      <DefinitionBlock.Header>応募方法</DefinitionBlock.Header>
      <DefinitionBlock.Body>
        <StyledLine>
          履歴書(写真貼付・メールアドレス・志望動機必須)を弊社宛にご郵送ください。書類選考の上、合否に関わらずご連絡いたします。
        </StyledLine>
      </DefinitionBlock.Body>
    </DefinitionBlock>
  </DefinitionCard>
);

export default RecruitCareerSummary;
