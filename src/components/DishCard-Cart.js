import React from 'react';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';
import Stepper from './Stepper';
import PropTypes from 'prop-types';

const StyledCartItem = styled.article`
  background-color: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const StyledCartItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const StyledImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 62px;
  background-color: #f2f2f2;
  border-radius: 50%;
  flex-shrink: 0;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.3));
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  clip-path: circle();
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const StyledInfoBot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDishTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const StyledDishPrice = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.orange};
`;

function DishCard({ item }) {
  return (
    <StyledCartItem>
      <StyledCartItemWrapper>
        <StyledImageHolder>
          <StyledImage src={item.picture_url} alt={item.name} />
        </StyledImageHolder>
        <StyledInfo>
          <StyledDishTitle>{item.name}</StyledDishTitle>
          <StyledInfoBot>
            <StyledDishPrice>${item.price / 100}</StyledDishPrice>
            <Stepper id={item.id}/>
          </StyledInfoBot>
        </StyledInfo>
      </StyledCartItemWrapper>
    </StyledCartItem>
  );
}

export default DishCard;

DishCard.propTypes = {
  item: PropTypes.object.isRequired,
};
