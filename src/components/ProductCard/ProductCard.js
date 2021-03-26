import React from "react";
import {
  Container,
  Thumb,
  TextContainer,
  InfoContainer,
  RatingCard,
} from "./styles";
import thumb from "./images/image_thumb.png";
import StdButton from "./../StdButton/StdButton";
import { AiOutlineStar } from "react-icons/ai";

export default function ProductCard(props) {
  return (
    <Container>
      <Thumb thumb={thumb}></Thumb>
      <TextContainer>
        <h3>{props.idx} FÓRUMULA DE LANÇAMENTO</h3>
        <h4>
          Por <span>Érico Rocha</span>
        </h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </TextContainer>
      <InfoContainer>
        <div>
          <RatingCard>
            <span>3.4</span>
            <AiOutlineStar />
          </RatingCard>
          <span>R$2500</span>
        </div>
        <div>
          <StdButton btnType="like" />
          <StdButton btnType="buy" />
        </div>
      </InfoContainer>
    </Container>
  );
}
