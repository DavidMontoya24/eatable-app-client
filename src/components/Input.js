import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles";

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 5px;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

const TitleInput = styled.label`
  color: ${colors.gray};
  ${typography.semibold.caption};
`;

const BodyInput = styled.input`
  ${typography.regular.m};
  box-shadow: ${({baseLine}) => baseLine ? `0px 2px 0px ${colors.black}` : ""};
  border: none;
  padding: 8px 0px;
  background-color: ${colors.lightgray};
  &:hover {
    color: black;
  }
  width: 100%;
  outline: none;
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  iconLeft,
  iconRight,
  baseLine = true,
  error,
}) {
  return (
    <DivInput>
      {label && <TitleInput htmlFor={id || name}>{label}</TitleInput>}
      <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
      {iconLeft}
      <BodyInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        baseLine={baseLine}
        />
        {iconRight}
      </div>
      { error && <span style={{color: "red"}}>{error.join(", ")}</span>}
    </DivInput>
  );
}

export default Input;
