import styled from '@emotion/styled';
import { useAuth } from '../context/auth-context';
import { colors, typography } from '../styles';
import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & h3 {
    ${typography.semibold.m};
    margin-bottom: 36px;
  }
  & p {
    color: ${colors.orange};
    cursor: pointer;
  }
`;

const ShowForm = styled.div`
  border-radius: 20px;
  padding: 12px 12px 45px 12px;
  background-color: ${colors.white};
  & h2 {
    ${typography.semibold.m};
    color: #000;
    margin: 10px 0;
  }
  & h3 {
    ${typography.regular.s};
    color: ${colors.gray};
  }
`;

const DivisorLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${colors.gray};
  margin: 10px 0;
`;

function ShowProfile({ handleBack, userData }) {
  const { logout } = useAuth();

  return (
    <Wrapper>
      <div>
        <WrapperHeader>
          <h3>Personal details</h3>
          <p onClick={handleBack}>change</p>
        </WrapperHeader>
        <ShowForm>
          <h2 data-cy = "data-Name">{userData.name}</h2>
          <h3 data-cy = "data-Email">{userData.email}</h3>
          <DivisorLine />
          <h3 data-cy = "data-Phone" >{userData.phone}</h3>
          <DivisorLine />
          <h3 data-cy = "data-Address">{userData.address}</h3>
        </ShowForm>
      </div>
      <Button onClick={logout}>Logout</Button>
    </Wrapper>
  );
}

export default ShowProfile;
