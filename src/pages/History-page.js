import { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import * as S from "../components/Styled-Check-History";
import { getOrders } from "../services/orders-service";
import { RiCalendarTodoFill } from "react-icons/ri";
import { AiOutlineLeft } from "react-icons/ai";
import { colors } from "../styles";

function History() {
  const [orders, setOrders] = useState([]);
  const [ history, setHistory] = useState(true);
  
  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
      setHistory(data.length !== 0)
    }).catch(console.log);
  }, []);

  function NoHistoryYet() {
    return (
      <S.Section>
        <S.Title>
          <S.Back>
            <AiOutlineLeft />
          </S.Back>
          History
        </S.Title>
        <S.NoHistory>
          <RiCalendarTodoFill
            style={{
              width: "150px",
              height: "320px",
              color: colors.gray,
            }}
          />
          No History Yet
        </S.NoHistory>
      </S.Section>
    );
  }

  return (
    <>
      {history ? (
        <S.Section>
          <S.Title>History</S.Title>
            <S.Container>
              {orders.map((order) => {
                return <OrderCard key={order.id} {...order} />;
              })}
            </S.Container>
        </S.Section>
        ) : ( 
          <NoHistoryYet />
      )}
    </>
  );
}

export default History;


