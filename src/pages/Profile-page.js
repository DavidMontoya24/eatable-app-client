import styled from '@emotion/styled';
import { colors } from '../styles';
import { FaChevronLeft } from 'react-icons/fa';
import EditProfileForm from '../components/EditProfileForm';
import ShowProfile from '../components/ProfileCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth-context';

const Container = styled.section`
  height: 75vh;
  padding: 50px 50px 0 50px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 95px;
  margin-bottom: 36px;
`;

function ProfilePage() {
  const [goEdit, setGoEdit] = useState(false);
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <Link to='/products'>
          <FaChevronLeft size='1.5rem' color={`${colors.black}`} />
        </Link>
        <h2>My Profile</h2>
      </Header>
      {goEdit === false && <ShowProfile handleBack={() => setGoEdit(true)} userData ={ user } />}
      {goEdit === true && <EditProfileForm />}
    </Container>
  );
}

export default ProfilePage;
