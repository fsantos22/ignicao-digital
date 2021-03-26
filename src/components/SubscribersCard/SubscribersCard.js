import React from "react";
import MultiRange from "../MultiRange/MultiRange";
import { Wrapper, Container, Divider, FilterText } from "./styles";
import SliderCard from './../SliderCard/SliderCard';
import CategoryBox from './../CategoryBox/CategoryBox';
import RatingBox from './../RatingBox/RatingBox';
import StdButton from '../StdButton/StdButton';


export default function SubscribersCard() {
  return (
    <Wrapper>
      <FilterText id="filterBarLabel1">Filtros</FilterText>
      <Container>
        <MultiRange />
        <Divider />
        <SliderCard />
        <Divider />
        <CategoryBox />
        <Divider />
        <RatingBox />
        <div className="btn-container">
          <StdButton text="LIMPAR FILTROS" />
        </div>
      </Container>
    </Wrapper>
  );
}
