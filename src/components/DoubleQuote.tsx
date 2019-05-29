import styled from "@emotion/styled"

const DoubleQuote = styled.span`
&:before {
  content: "“";
  font-family: "Sawarabi Gothic", sans-serif;
  font-weight: bold;
}

&:after {
  content: "”";
  font-family: "Sawarabi Gothic", sans-serif;
  font-weight: bold;
}
`

export default DoubleQuote
