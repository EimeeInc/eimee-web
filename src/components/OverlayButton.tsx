import * as React from "react"
import classnames from "classnames"
import OverlayContext, { initOverlayStore } from "@/contexts/Overlay"
import styled from "@emotion/styled"

const cssVal = {
  lineLength: 30,
  lineThin: 5,
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity, background-color 0.15s ease;
  cursor: pointer;
  background-color: #f5f5f5;

  &:hover {
    opacity: 0.4;
    transition-duration: 0.4s;
  }

  &.isActive {
    background-color: transparent;
  }
`

const TransformContainer = styled.div`
  position: relative;
  width: ${cssVal.lineLength}px;
  height: ${cssVal.lineThin}px;
  pointer-events: none;
`

const Line = styled.span`
  display: block;
  position: absolute;
  width: ${cssVal.lineLength}px;
  height: ${cssVal.lineThin}px;
  background-color: #e8984c;
  transition: all 0.15s ease;

  &:nth-of-type(1) {
    top: ${cssVal.lineThin * -2}px;
  }

  &:nth-of-type(3) {
    top: ${cssVal.lineThin * 2}px;
  }

  &.isActive {
    background-color: #fcfcfc;

    &:nth-of-type(1) {
      top: 0;
      transform: rotate(45deg);
    }

    &:nth-of-type(2) {
      opacity: 0;
    }

    &:nth-of-type(3) {
      top: 0;
      transform: rotate(-45deg);
    }
  }
`

const OverlayButton = ({ className }: { className?: string }) => {
  const overlayContext =
    React.useContext(OverlayContext) || initOverlayStore(false)

  return (
    <Wrapper
      className={classnames(className, { isActive: overlayContext.isActive })}
      onClick={overlayContext.toggle}
    >
      <TransformContainer>
        <Line className={classnames({ isActive: overlayContext.isActive })} />
        <Line className={classnames({ isActive: overlayContext.isActive })} />
        <Line className={classnames({ isActive: overlayContext.isActive })} />
      </TransformContainer>
    </Wrapper>
  )
}

export default OverlayButton
