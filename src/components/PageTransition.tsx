import * as React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { WindowLocation } from "@reach/router";

const fadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  40% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    display: block;
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
`;

const hideLoading = keyframes`
  0% {
    display: flex;
    opacity: 1;
  }
  39% {
    display: flex;
    opacity: 1;
  }
  40% {
    display: none;
    opacity: 0;
  }
  100% {
    display: none;
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  &.entering {
    display: none;
    position: absolute;
    opacity: 0;
  }

  &.entered {
    animation: ${fadeIn} 2.5s linear 0s 1 forwards;
  }

  &.exiting {
    animation: ${fadeOut} 0.8s linear 0s 1 forwards;
  }
`;

const Loading = styled.div`
  display: none;

  &.entered {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f0cd6c;
    z-index: 999;
    pointer-events: none;
    animation: ${hideLoading} 2.5s linear 0s 1 forwards;
  }
`;

const Transition = ({
  children,
  location,
}: {
  children: React.ReactNode;
  location: WindowLocation;
}) => (
  <TransitionGroup>
    <ReactTransition
      key={location.state && location.state.key}
      timeout={{
        enter: 1300,
        exit: 800,
      }}
    >
      {status => (
        <>
          <Wrapper className={status}>{children}</Wrapper>
          <Loading className={status}>
            <div className="fl">
              <div className="spinner6">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
              </div>
            </div>
          </Loading>
        </>
      )}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;
