import styled from "@emotion/styled";
import { useState } from "react";
import Form from "./components/Login-Signup-Form";
import Logo from "./assets/eatable-logo.svg";
import { colors } from "./styles/colors";
import { typography } from "./styles";
import { NavLink } from "react-router-dom";

const StyledUnAuthenticatedApp = styled.div`
  height: 85vh;
`;

const CustomLink = styled(NavLink)`
  cursor: pointer;
  color: black;
  ${typography.semibold.m};
  font-weight: 600;
  padding: 0 36px;
  padding-bottom: 13px;
  text-decoration: none;
`;

const LoginTitle = styled.div`
  max-width: 414px;
  min-height: 382px;
  font-weight: 400;
  font-size: 2rem;
  line-height: 40px;
  padding: 0 50px;
  padding-top: 155px;
  margin: 0 auto;
  text-align: center;
  background-color: ${colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
`;

const LoginSubTitle = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 8px;
  margin-top: 12px;
  color: ${colors.orange};
`;

const ContentLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 119px;
`;

function UnauthenticatedApp() {
  const [Login, setLogin] = useState(true);

  function handleLinkClick(event) {
    event.preventDefault();
    setLogin(!Login);
  }
  return (
    <StyledUnAuthenticatedApp>
      <LoginTitle>
        <img src={Logo} alt="logo" />
        <LoginSubTitle>Food for Everyone</LoginSubTitle>
        <ContentLinks>
          <CustomLink
            onClick={handleLinkClick}
            style={{ boxShadow: Login ? `0px 3px 0px ${colors.orange}` : "" }}
          >
            {"Login"}
          </CustomLink>
          <CustomLink
            onClick={handleLinkClick}
            style={{ boxShadow: !Login ? `0px 3px 0px ${colors.orange}` : "" }}
          >
            {"Sign-up"}
          </CustomLink>
        </ContentLinks>
      </LoginTitle>
      {Login ? <Form logInUp="Login" /> : <Form logInUp="Sign-up" />}
    </StyledUnAuthenticatedApp>
  );
}

export default UnauthenticatedApp;
