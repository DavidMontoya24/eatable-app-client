import React from 'react';
import styled from '@emotion/styled';
import DishCard from './DishCard-Cart';
import PropTypes from 'prop-types';

const StyledCartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function CartList({ cart }) {
  return (
    <StyledCartList>
      {cart.map((item) => (
        <DishCard key={item.id} item={item} />
      ))}
    </StyledCartList>
  );
}

export default CartList;

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
};
