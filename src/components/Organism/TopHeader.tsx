import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import media from "@/util/breakpoint";

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: relative;
  width: 50%;
  height: 50vh;
  opacity: 0;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:nth-of-type(1) {
    background-image: url("/assets/img/ph_top1.jpg");
    animation: ${fadeIn} 1.5s ease 0.5s 1 forwards;

    ${media.lessThan("md")`
      width: 100%;
      height: 100vh;
    `}
  }

  &:nth-of-type(2) {
    background-image: url("/assets/img/ph_top2.jpg");
    background-position: left top;
    animation: ${fadeIn} 1.5s ease 1s 1 forwards;

    ${media.lessThan("md")`
      display: none;
      animation: none;
    `}
  }

  &:nth-of-type(3) {
    background-image: url("/assets/img/ph_top3.jpg");
    animation: ${fadeIn} 1.5s ease 1.5s 1 forwards;

    ${media.lessThan("md")`
      display: none;
      animation: none;
    `}
  }

  &:nth-of-type(4) {
    background-image: url("/assets/img/ph_top4.jpg");
    animation: ${fadeIn} 1.5s ease 2s 1 forwards;

    ${media.lessThan("md")`
      display: none;
      animation: none;
    `}
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 50.75%;
  left: 50%;
  width: 400px;
  height: 95px;
  opacity: 0;
  background-image: url("/assets/img/logo_top.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 5s ease 2.5s 1 forwards;

  ${media.lessThan("md")`
    animation: ${fadeIn.name} 5s ease 1.5s 1 forwards;
  `}

  ${media.lessThan("sm")`
    width: 250px;
    height: 60px;
  `}
`;

const TopBackground = ({ className }: { className?: string }) => (
  <Wrapper className={className}>
    {Array.from(Array(4).keys()).map(i => (
      <Background key={i} />
    ))}
    <Logo />
  </Wrapper>
);

export default TopBackground;
