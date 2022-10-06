import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { colors } from "../styles/colors";
import CartList from "../components/CartList";
import styled from "@emotion/styled";
import { useProducts } from "../context/products-context";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { typography } from "../styles";

const StyledCartPage = styled.section`
  max-width: 414px;
  min-width: 414px;
  padding: 0 50px;
  margin: 0 auto;
`;

const StyledCartPageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

const StyledBackButton = styled(FaChevronLeft)`
  font-size: 24px;
  color: ${colors.black};
`;

const StyledTitle = styled.h2``;

const StyledHidden = styled.div`
  visibility: hidden;
  user-select: none;
`;

const StyledCartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  margin-top: 40px;
`;

const StyledBodyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const StyledBodyInfoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
`;

const StyledPricetag = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  min-height: 500px;
`

const NotCartContainer = styled.div`
  text-align:center;
  margin: 100% 0px;
  & p {
    margin-top: 2rem;
    ${typography.semibold.xl}
  }
`

function CartPage() {
  const { selectedProducts, total } = useProducts();
  return (
    <StyledCartPage>
      <StyledCartPageHeader>
        <Link to="/products">
          <StyledBackButton />
        </Link>
        <StyledTitle>Cart</StyledTitle>
        <StyledHidden>Cod</StyledHidden>
      </StyledCartPageHeader>
      <ContentContainer id="conta">
        {(selectedProducts.length !== 0)
          ?
          <StyledCartBody>
            <CartList cart={selectedProducts} />
            <StyledBodyInfo>
              <StyledBodyInfoTotal>
                Total: <StyledPricetag>${total}</StyledPricetag>
              </StyledBodyInfoTotal>
              <Link to="/checkout">
                <Button>Checkout</Button>
              </Link>
            </StyledBodyInfo>
          </StyledCartBody>
          :
          <NotCartContainer>
            <CgShoppingCart size="8rem" style={{color: "#C7C7C7"}}/>
            <p>No items in the cart</p>
          </NotCartContainer>
          }
      </ContentContainer>
    </StyledCartPage>
  );
}

export default CartPage;
