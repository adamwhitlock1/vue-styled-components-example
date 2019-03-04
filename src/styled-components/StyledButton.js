import styled from "vue-styled-components";
const buttonProps = { color: String, br: String, pad: String, bgc: String };

export const StyledButton = styled("button", buttonProps)`
  font-size: 2em;
  color: ${props => props.color};
  border-radius: ${props => props.br};
  padding: ${props => props.pad};
  background-color: ${props => props.bgc};
  letter-spacing: 3px;
`;
