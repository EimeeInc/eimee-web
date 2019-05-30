import * as React from "react"
import NewsBlock from "@/components/Molecule/NewsBlock"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  ${media.lessThan("xl")`
    max-width: 1200px;
  `}

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
  `}
`

const Spacer = styled.div`
  display: none;
  flex: auto;

  &:nth-of-type(4n),
  &:nth-of-type(4n-1),
  &:nth-of-type(4n-2) {
    display: block;

    ${media.lessThan("xl")`
      display: none;
    `}
  }

  &:nth-of-type(3n),
  &:nth-of-type(3n-1) {
    ${media.lessThan("xl")`
      display: block;
    `}

    ${media.lessThan("lg")`
      display: none;
    `}
  }

  &:nth-of-type(2n) {
    ${media.lessThan("lg")`
      display: block;
    `}

    ${media.lessThan("sm")`
      display: none;
    `}
  }
`

const News = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Wrapper {...props}>
    <NewsBlock to="https://kuchikomu.jp/" blank>
      <NewsBlock.Title>次世代総合口コミSNSクチコムをリリース</NewsBlock.Title>
      <NewsBlock.Body>
        ユーザーとお店が繋がる次世代総合口コミSNS「クチコム」をリリースしました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_kuchikomu.jpg" />
      <NewsBlock.PublsihDate
        dateTime={new Date("2017-03-30T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <NewsBlock to="https://eimee.co.jp/" blank>
      <NewsBlock.Title>Eimeeサイトリニューアル</NewsBlock.Title>
      <NewsBlock.Body>EimeeWebサイトをリニューアルしました。</NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_eimee.jpg" />
      <NewsBlock.PublsihDate
        dateTime={new Date("2017-01-24T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <NewsBlock>
      <NewsBlock.Title>Yahoo!プロモーション広告正規代理店</NewsBlock.Title>
      <NewsBlock.Body>
        Yahoo!プロモーション広告正規代理店になりました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_promotion.jpg" />
      <NewsBlock.PublsihDate
        dateTime={new Date("2017-07-26T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <NewsBlock to="https://クレジットカードおすすめ比較.net/" blank>
      <NewsBlock.Title>クレジットカードhikaQリリース</NewsBlock.Title>
      <NewsBlock.Body>
        クレジットカードhikaQをリリースしました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_credit.jpg" />
      <NewsBlock.PublsihDate
        dateTime={new Date("2012-11-21T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <Spacer />
  </Wrapper>
)

export default News
