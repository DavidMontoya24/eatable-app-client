import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { colors } from "../styles/colors";
import PizzaImage from "../assets/pizza.png";
import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import { showProduct } from "../services/products-service";
import { useProducts } from "../context/products-context";

const StyledDishPage = styled.section`
  min-width: 414px;
  max-width: 414px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const StyledDishHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  margin-left: 50px;
`;

const StyledDishBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  margin: 50px;
`;

const StyledDishImageHolder = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  align-self: center;
  border-radius: 50%;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.4));
`;

const StyledDishImage = styled.img`
  height: 100%;
  object-fit: fill;
`;

const StyledDishInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledDishInfoTop = styled.div`
  text-align: center;
  align-self: center;
`;

const StyledDishName = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;

const StyledDishPrice = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${colors.orange};
`;

const StyledDishInfoBottom = styled.div``;

const StyledDishDescriptionNotice = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.black};
`;

const StyledDishDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.black};
`;

const StyledButton = styled.button`
  border: none;
  width: 100%;
  background-color: ${colors.orange};
  color: white;
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  height: 70px;
  padding: 12px 16px;
  cursor: pointer;
`;
const defaultProps = {
  picture_url: PizzaImage,
  name: "Pasta Dish",
  price: "15.45",
  description:
    "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
  isDisabled: false,
};

function DishPage() {
  const { addProduct, isAdded, selectedProducts } = useProducts();
  const [data, setData] = useState(defaultProps);
  let params = useParams();
  const dishId = Number(params.id);

  useEffect(() => {
    showProduct(dishId).then(setData).catch(console.log);
  }, [dishId]);

  useEffect(() => console.log(selectedProducts), [selectedProducts]);
  function handleClick() {
    addProduct(data.id);
  }
  return (
    <StyledDishPage>
      <StyledDishHeader>
        <Link to="/products">
          <FaChevronLeft color={`${colors.black}`} />
        </Link>
      </StyledDishHeader>
      <StyledDishBody>
        <StyledDishImageHolder>
          <StyledDishImage
            src={data.picture_url}
            alt={data.name}
            draggable={false}
          />
        </StyledDishImageHolder>
        <StyledDishInfo>
          <StyledDishInfoTop>
            <StyledDishName>{data.name}</StyledDishName>
            <StyledDishPrice>${(data.price / 100).toFixed(2)}</StyledDishPrice>
          </StyledDishInfoTop>
          <StyledDishInfoBottom>
            <StyledDishDescriptionNotice>
              Description
            </StyledDishDescriptionNotice>
            <StyledDishDescription>{data.description}</StyledDishDescription>
          </StyledDishInfoBottom>
        </StyledDishInfo>
        <StyledButton isDisabled={isAdded(data.id)} onClick={handleClick}>
          Add to Cart
        </StyledButton>
      </StyledDishBody>
    </StyledDishPage>
  );
}

export default DishPage;

// DishPage.propTypes = {
//   pizzaImage: PropTypes.string,
//   dishName: PropTypes.string,
//   dishPrice: PropTypes.string,
//   dishDescription: PropTypes.string,
//   isDisabled: PropTypes.bool,
// };
