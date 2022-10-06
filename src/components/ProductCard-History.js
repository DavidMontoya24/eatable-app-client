import * as S from "./Styled-Check-History";

export default function ProductCard(product) {
  const { quantity, subtotal, product_name } = product;
  return (
    <S.OrderHistory>
      <p data-cy="quantity" data-cya="product_name">
          {quantity} - {product_name}
      </p>
      <S.Price data-cy="subtotal"> ${(subtotal / 100).toFixed(2)} </S.Price>
    </S.OrderHistory>
  );
}
