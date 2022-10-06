import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import * as S from "../components/Styled-Check-History";
import { FaChevronLeft } from "react-icons/fa";
import { useAuth } from "../context/auth-context";
import { useProducts } from "../context/products-context";
import { createOrder } from "../services/orders-service";
import { colors } from "../styles/colors";

function CheckOut() {
  const { total, selectedProducts, deleteCart } = useProducts();
  const { user } = useAuth();
  const navigate = useNavigate();

  function completeOrder() {
    const adress = user.address;
    const items = selectedProducts.map((product) => {
      const { id, quantity } = product;
      return { id, quantity };
    });
    navigate("/products");
    createOrder(adress, items);
    deleteCart()
  }

  return (
    <S.Section>
      <S.Title>
        <Link to="/cart">
          <S.Back><FaChevronLeft size="1.5rem" color={`${colors.black}`}/></S.Back>
        </Link>
        CheckOut
      </S.Title>
      <S.Container>
        <S.Delivery>Delivery</S.Delivery>
        <S.Options>
          <p>Address details</p>
          <Link to="/profile" style={{textDecoration: "none"}}><S.Anchors>change</S.Anchors></Link>
        </S.Options>
        <S.ContainerDetails>
          <S.FullName>{user.name}</S.FullName>
          <S.Address>{user.address}</S.Address>
          <S.CelPhone>{user.phone}</S.CelPhone>
        </S.ContainerDetails>
      </S.Container>
      <S.ContainOrder>
        <S.TotalOrder>
          <S.Total>Total</S.Total>
          <S.PriceOrder>${total}</S.PriceOrder>
        </S.TotalOrder>
        <Button onClick={completeOrder}>Complete Order</Button>
      </S.ContainOrder>
    </S.Section>
  );
}

export default CheckOut;
