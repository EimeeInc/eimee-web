import styled from "@emotion/styled";
import media from "@/util/breakpoint";

const DefinitionCard = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-top;
flex-direction: row;
flex-wrap: wrap;
width: 100%;

& > * {
  width: 50%;
  padding: 5px;

  ${media.lessThan("md")`
    flex-direction: column;
   align-items: center;
    width: 100%;
  `}
}
`;

export default DefinitionCard;
