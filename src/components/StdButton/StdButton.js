import React from "react";
import { Container, BuyContainer, LikeContainer } from "./styles";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

export default function StdButton(props) {
if(props.btnType === "like"){
    return (
      <LikeContainer>
        <FiHeart />
        AMEI
      </LikeContainer>
    );
}
if (props.btnType === "buy") {
  return (
    <BuyContainer>
      <FiShoppingBag />
      COMPRAR
    </BuyContainer>
  );
}

  return (
    <Container>
      {props.btnType}
      {props.text}
    </Container>
  );
}
