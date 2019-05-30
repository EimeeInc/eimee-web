import * as React from "react"
import NewsBlock from "@/components/Molecule/NewsBlock";

const News = () => (
  <>
    <NewsBlock to="https://kuchikomu.jp/" blank>
      <NewsBlock.Title>次世代総合口コミSNSクチコムをリリース</NewsBlock.Title>
      <NewsBlock.Body>
        ユーザーとお店が繋がる次世代総合口コミSNS「クチコム」をリリースしました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_kuchikomu.jpg" />
      <NewsBlock.PublsihDate dateTime={ new Date("2017-03-30T00:00:00.000+09:00") } />
    </NewsBlock>
    <NewsBlock to="https://eimee.co.jp/" blank>
      <NewsBlock.Title>Eimeeサイトリニューアル</NewsBlock.Title>
      <NewsBlock.Body>
        EimeeWebサイトをリニューアルしました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_eimee.jpg" />
      <NewsBlock.PublsihDate dateTime={ new Date("2017-01-24T00:00:00.000+09:00") } />
    </NewsBlock>
    <NewsBlock>
      <NewsBlock.Title>Yahoo!プロモーション広告正規代理店</NewsBlock.Title>
      <NewsBlock.Body>
        Yahoo!プロモーション広告正規代理店になりました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_promotion.jpg" />
      <NewsBlock.PublsihDate dateTime={ new Date("2017-07-26T00:00:00.000+09:00") } />
    </NewsBlock>
    <NewsBlock to="https://クレジットカードおすすめ比較.net/" blank>
      <NewsBlock.Title>クレジットカードhikaQリリース</NewsBlock.Title>
      <NewsBlock.Body>
        クレジットカードhikaQをリリースしました。。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_credit.jpg" />
      <NewsBlock.PublsihDate dateTime={ new Date("2012-11-21T00:00:00.000+09:00") } />
    </NewsBlock>
  </>
)

export default News
