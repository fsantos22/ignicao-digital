import React from "react";
import logo from "./images/logo.png";
import { Container, LogoContainer, TextContainer } from "./styles";

export default function Brand() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <TextContainer>Ignição Digital</TextContainer>
    </Container>
  );
}
