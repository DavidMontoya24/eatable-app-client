import { colors, typography } from "../styles";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 100%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -15%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  ${typography.semibold.l}
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 156px;
  height: 212px;
  background: ${colors.white};
  border-radius: 30px;
  position: relative;
`;

const StyledName = styled.p`
  color: black;
  max-height: 60px;
  width: 100%;
  text-align: center;
`;

const StyledPrice = styled.p`
  color: ${colors.orange};
`;

export default function DishCard({ name, price, picture_url }) {
  const fixedPrice = (price / 100).toFixed(2);
  return (
      <StyledWrapper>
        <StyledImg src={picture_url} alt={name} />
        <StyledContainer>
          <StyledName data-cy="name">{name}</StyledName>
          <StyledPrice data-cy="price">{`$${fixedPrice}`}</StyledPrice>
        </StyledContainer>
      </StyledWrapper>
  );
}
