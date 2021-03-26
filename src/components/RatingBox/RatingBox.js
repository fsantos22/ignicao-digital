import React from "react";
import { Container, Label, RatingContainer, StarsContainer } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function RatingBox() {
  return (
    <Container>
      <Label>
        <p>Avaliação</p>
      </Label>
      <RatingContainer>
        <StarsContainer>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </StarsContainer>
        <span>8500</span>
      </RatingContainer>
      <RatingContainer>
        <StarsContainer>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </StarsContainer>
        <span>3250</span>
      </RatingContainer>
      <RatingContainer>
        <StarsContainer>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </StarsContainer>
        <span>1120</span>
      </RatingContainer>
    </Container>
  );
}
