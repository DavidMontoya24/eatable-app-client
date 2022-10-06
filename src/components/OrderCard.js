import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import ProductCard from "./ProductCard-History";
import * as S from "./Styled-Check-History";

export default function OrderCard(order) {
  const { items_count, created_at, total, order_details, delivery_address } =
    order;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  
  const date = new Intl.DateTimeFormat("en-US", options).format(
    new Date(created_at)
  );
  const [check, setCheck] = useState(false);

  function handleCheck() {
    setCheck(!check);
  }
  return (
    <S.ContainerDetails>
      <S.HistoryDate data-cy="date"> {date} </S.HistoryDate>
      <S.OptionsHistory>
        <p data-cy="items_count"> {items_count} items </p>
        <S.Price data-cy="total"> ${(total / 100).toFixed(2)} </S.Price>
      </S.OptionsHistory>
      {!check && (
        <S.Outline onClick={handleCheck} >
          <AiOutlineDown data-cy="button"/>
        </S.Outline>
      )}

      {check && (
        <>
          <S.Tipe>Order</S.Tipe>
          {order_details.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          <S.Line />
          <S.Tipe>Delivery</S.Tipe>
          <p data-cy="delivery_address" >{delivery_address}</p>
          <S.Outline onClick={handleCheck}>
            <AiOutlineUp data-cy="button"/>
          </S.Outline>
        </>
      )}
    </S.ContainerDetails>
  );
}
