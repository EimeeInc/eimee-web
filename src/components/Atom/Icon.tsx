import * as React from "react";
import styled from "@emotion/styled";

type IconProps = {
  size: string;
  src: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const Icon = styled.span<IconProps>`
  display: inline-block;
  width: ${props => `calc(${props.size} - 2px)`};
  height: ${props => `calc(${props.size} - 2px)`};
  margin: 1px 3px;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Icon;
