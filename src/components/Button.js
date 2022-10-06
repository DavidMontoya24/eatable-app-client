import styled from "@emotion/styled";
import { typography } from "../styles";
import { colors } from "../styles/colors";

const StyledBtn = styled.button`
  border: none;
  border-radius: 30px;
  padding: 23.5px 0px;
  color: ${colors.white};
  background-color: ${colors.orange};
  ${typography.regular.m}
  cursor: pointer;
  width: 100%;
`;

function Button({ children, onClick }) {
  return (
    <StyledBtn data-cy="button" onClick={onClick}>
      {children}
    </StyledBtn>
  );
}

export default Button;
