import * as React from "react"
import classnames from "classnames"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 60px;
  font-size: 5rem;
  font-weight: bold;

  ${media.lessThan("md")`
    margin-top: 10px;
    margin-bottom: 20px;
  `}

  ${media.lessThan("sm")`
    font-size: 3rem;
  `}

  &.large {
    ${media.greaterThan("md")`
      font-size: 7rem;
    `}
  }
`

type CardTitleProps = {
  children: React.ReactNode
  large?: boolean
  className?: string
}

const CardTitle = ({ children, large = false, className }: CardTitleProps) => (
  <Wrapper className={classnames(className, { large })}>
    <span>{children}</span>
  </Wrapper>
)

export default CardTitle
