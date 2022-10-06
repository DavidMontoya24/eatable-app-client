import styled from '@emotion/styled';

// CheckOut Page

export const Section = styled.div`
  margin: auto;
  height: 75vh;
  border-radius: 20px;
  padding: 0 50px;
`;

export const Container = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  height: 780px;
  z-index: 2;
  overflow-y: auto;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  justify-items: center;
  align-items: center;
  padding-top: 50px;
`;

export const Delivery = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ContainerDetails = styled.div`
  background: #ffffff;
  margin-top: 17px;
  padding: 20px 30px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

export const FullName = styled.div`
  margin: 17px auto;
  border-bottom: 0.5px solid #000000;
`;

export const Address = styled.div`
  margin: 17px auto;
  border-bottom: 0.5px solid #000000;
`;

export const CelPhone = styled.div`
  margin: 17px auto;
  border-bottom: 0.5px solid #000000;
`;

export const TotalOrder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 52px;
`;

export const ContainOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 75px;
`;

export const Total = styled.p`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
`;

export const PriceOrder = styled.p`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;

export const Back = styled.div`
  margin-right: 100px;
`;

// History Page

export const HistoryDate = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

export const OptionsHistory = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
`;

export const OrderHistory = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;

export const Outline = styled.div`
  display: flex;
  justify-content: end;
`;

export const Tipe = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-top: 18px;
`;

export const Price = styled.p`
  color: #fa4a0c;
`;

export const Change = styled.p`
  color: #fa4a0c;
`;

export const Line = styled.p`
  margin-top: 9px;
  opacity: 0.3;
  border: 0.5px solid #000000;
`;

export const NoHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 35px;
  padding: 50px;
`;

export const Anchors = styled.div`
  color: #fa4a0c;
`;
