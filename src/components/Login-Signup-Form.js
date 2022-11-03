import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAuth } from "../context/auth-context";

const StyledForm = styled.section`
  height: 60%;
  /* background-color: aqua; */
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 48px auto;
  padding: 0 52px;
  /* background-color: azure; */
`;

const LoginButton = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Form = ({ logInUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const [errorsSignup, setErrorsSignup] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setErrors("");
    setErrorsSignup({ email: "", password: "" });
  }, [logInUp]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const { login, signup } = useAuth();
  // setErrors("");
  function handleSubmit(e) {
    e.preventDefault();

    if (logInUp === "Login") {
      login(formData).catch((error) => setErrors(JSON.parse(error.message)));
    } else {
      signup(formData).catch((error) => {
        console.log(error.message);
        setErrorsSignup(JSON.parse(error.message));
      });
    }
  }

  return (
    <StyledForm>
      <FormLogin onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="my_mail@mail.com"
          label="Email address"
          onChange={handleChange}
          value={formData.email}
          error={errorsSignup.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="******"
          label="Password"
          onChange={handleChange}
          value={formData.password}
          error={errorsSignup.password}
        />
        <span data-cy="error-login" style={{ color: "red" }}>
          {errors}
        </span>
        <LoginButton>
          <Button type="submit">{logInUp}</Button>
        </LoginButton>
      </FormLogin>
    </StyledForm>
  );
};

export default Form;
