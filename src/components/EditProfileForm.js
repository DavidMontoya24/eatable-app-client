import styled from '@emotion/styled';
import { useState } from 'react';
import { useAuth } from '../context/auth-context';
import { updateUser } from '../services/users-service';
import { colors, typography } from '../styles';
import Button from './Button';
import Input from './Input';

const Wrapper = styled.div`
  width: 100%;
  height: 64vh;
  display: flex;
  flex-direction: column;
  & p {
    ${typography.semibold.m};
    margin-bottom: 36px;
  }
`;

const WrapperForm = styled.div`
  border-radius: 20px;
  padding: 12px;
  background-color: ${colors.white};
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function EditProfileForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    updateUser(formData)
      .then((data) => updateUser(data))
      .catch(console.log);
    window.location.reload(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper>
      <p>Update personal details</p>
      <Form onSubmit={handleSubmit}>
        <WrapperForm>
          <Input
            name='name'
            value={formData.name}
            placeholder='John'
            label='Name'
            onChange={handleChange}
          />
          <Input
            name='email'
            value={formData.email}
            placeholder='example@mail.com'
            label='Email'
            onChange={handleChange}
          />
          <Input
            name='phone'
            value={formData.phone}
            placeholder='999888777'
            label='Phone'
            onChange={handleChange}
          />
          <Input
            name='address'
            value={formData.address}
            placeholder='Street 15th'
            label='Adress'
            onChange={handleChange}
          />
        </WrapperForm>
        <Button>Update</Button>
      </Form>
    </Wrapper>
  );
}

export default EditProfileForm;
