import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import loading from "./assets/loading.png";
import Logo from "./assets/eatable-logo.svg";
import styled from "@emotion/styled";
import { colors } from "./styles";

const ContainerLoading = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const ContainerLogo = styled.div`
  width: 262px;
  height: 262px;
  border-radius: 100%;
  background-color: white;
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 317px;
  left: 76px;
`;

const ImageTitle = styled.img`
  margin-top: 86px;
`;

const LoginSubTitle = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 8px;
  margin-top: 12px;
  color: ${colors.orange};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(loadingMain, 2000);
loadingPage();

function loadingPage() {
  root.render(
    <React.StrictMode>
      <Global styles={global} />
      <Global styles={reset} />
      <ContainerLoading>
        <img src={loading} alt="Loading" />
        <ContainerLogo>
          <ImageTitle src={Logo} alt="logo" />
          <LoginSubTitle>Food for Everyone</LoginSubTitle>
        </ContainerLogo>
      </ContainerLoading>
    </React.StrictMode>
  );
}

function loadingMain() {
  console.log("TRY INPUT:");
  console.log("email: david@mail.com");
  console.log("password: 123456");
  root.render(
    <React.StrictMode>
      <Global styles={global} />
      <Global styles={reset} />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
