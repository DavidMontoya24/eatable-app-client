import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useProducts } from '../context/products-context';

const StyledStepper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: white;
  background-color: ${colors.orange};
  border-radius: 30px;
`;

const StyledStepperButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: white;
  background-color: transparent;
  font-weight: 600;
  cursor: pointer;
`;

function Stepper({ id, max = 10, onChange = () => {} }) {
  // const [qty, setQty] = useState(1);
  const { deleteProduct, setQuantity, selectedProducts } = useProducts();

  const product = selectedProducts.find((product) => product.id === id);
  const qty = product?.quantity;

  function handleDecrement() {
    if (qty === 1) return deleteProduct(id);
    setQuantity(id, qty - 1);
    onChange(id, qty - 1);
  }

  function handleIncrement() {
    if (qty >= max) return;
    setQuantity(id, qty + 1);
    onChange(id, qty + 1);
  }

  return (
    <StyledStepper>
      <StyledStepperButton onClick={handleDecrement} id='minus'>
        <FaMinus />
      </StyledStepperButton>
      <span id='qty'>{qty}</span>
      <StyledStepperButton onClick={handleIncrement} id='plus'>
        <FaPlus />
      </StyledStepperButton>
    </StyledStepper>
  );
}

export default Stepper;

Stepper.propTypes = {
  max: PropTypes.number,
};
