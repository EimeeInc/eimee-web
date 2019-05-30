import * as React from "react"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${media.lessThan("xl")`
    max-width: calc(100% - 80px);
  `}

  ${media.lessThan("lg")`
    max-width: calc(100% - 50px);
  `}

  ${media.lessThan("sm")`
    max-width: calc(100% - 20px);
    min-width: 320px;
  `}
`

const PageContentsWrapper = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Wrapper {...props}>{children}</Wrapper>
)

export default PageContentsWrapper
