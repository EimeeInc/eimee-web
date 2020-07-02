import * as React from "react";
import styled from "@emotion/styled";
import FadeInEnteringCard from "@/components/Atom/FadeInEnteringCard";
import PictureBlock from "@/components/Molecule/PictureBlock";

const StyledFadeInEnteringCard = styled(FadeInEnteringCard)`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Works = () => (
  <>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>新橋駅から徒歩1分のアクセス</PictureBlock.Header>
        <PictureBlock.Body>
          弊社は現在、新橋に事務所を構えています。
          JR新橋駅の徒歩1分圏内にあるため急な悪天候にも左右されることもなく通勤が可能です。
          事務所で業務を行うほか、施設内には落ち着いた雰囲気のコワーキングスペースもあり、それらを利用することも可能です。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_office.jpg"
          alt="事務所コワーキングスペース"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>時差出勤制度</PictureBlock.Header>
        <PictureBlock.Body>
          エイミーでは社員の生活スタイルに合わせた働き方を叶える為の制度として「時差出勤制度」を導入しています。
          出勤時間を朝8時から10時までの間で自由に選択することができ、出勤時間によって退勤時間が17時から19時の間で変わる為、その日の都合や生活のリズムに合わせた柔軟な働き方を可能にしています。
          朝や業務後に時間が多く取れるようにする社員も多く、プライベートの用事や家事に時間を充てるなど使い方は様々です。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_difference.jpg"
          alt="時差出勤制度イメージ"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>年次有給休暇前借制度</PictureBlock.Header>
        <PictureBlock.Body>
          新しく入社された方が安心して働けるように「年次有給休暇前借制度」を導入しています。
          入社後すぐ3日分の年次有給休暇の取得が可能なため、急な用事などにも柔軟に対応が可能です。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_advance.jpg"
          alt="年次有給休暇前借制度イメージ"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>
          1時間単位の年次有給休暇取得制度
        </PictureBlock.Header>
        <PictureBlock.Body>
          社員のより柔軟な働き方が可能になるように「1時間単位の年次有給休暇取得制度」を導入しています。
          年間累計40時間を上限として1時間単位での有給休暇の取得が可能で、朝や夕方に用事がある為
          1時間だけお休みしたい時や昼に2時間だけ中抜けするなど、時間を有効活用して働くことができます。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_timeoff.jpg"
          alt="1時間単位の年次有給休暇取得制度イメージ"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>テレワーク制度</PictureBlock.Header>
        <PictureBlock.Body>
          社員の健康や事情に合わせて勤務地を選択できる「テレワーク制度」を導入しています。
          自宅で業務を行える為、育児や介護をしながら働くことも可能です。
          2020年5月時点でほとんどの社員がテレワーク制度を利用しており、それぞれに合った環境での働き方を可能にしています。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_remotework.jpg"
          alt="テレワーク制度イメージ"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>昼食補助</PictureBlock.Header>
        <PictureBlock.Body>
          社員の健康と食生活を支えるために昼食補助としてコンビニやレストランで利用可能な『チケットレストラン』を導入しています。
          在宅勤務・事務所勤務問わず、業務中に昼休憩を取得する社員全員が利用可能で、1人暮らしや家事に手が回りにくい社員にも重宝されています。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_ticketrestaurant.jpg"
          alt="チケットレストラン券面"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>ボードゲーム倶楽部</PictureBlock.Header>
        <PictureBlock.Body>
          社内同士の交流や論理的思考を養うことを目的として、ボードゲーム倶楽部を定期的に開催しております。
          ゲームの種類は様々で社員からのリクエストで新たにゲームを購入したり、個人で持ち寄って遊んだりとバラエティーに富んでいます。
          また、社内外問わず参加を受け付けており、純粋にボードゲームを楽しむ一方でエイミーの持つ雰囲気を直接感じ取って貰うこともできます。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_boardgame.jpg"
          alt="ボードゲーム倶楽部イメージ"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
    <StyledFadeInEnteringCard>
      <PictureBlock>
        <PictureBlock.Header>多様な働き方</PictureBlock.Header>
        <PictureBlock.Body>
          社員の多様な働き方を応援する一環として副業や時短勤務などの相談をすることも可能です。
          育児や介護のために短時間の勤務をしたり、週の半分を別の企業で働くなど様々な働き方に対し柔軟に対応できる体制を築いています。
        </PictureBlock.Body>
        <PictureBlock.Image
          src="/assets/img/ph_workstyle_variouswork.jpg"
          alt="多様な働き方イメージ"
        />
      </PictureBlock>
    </StyledFadeInEnteringCard>
  </>
);

export default Works;
