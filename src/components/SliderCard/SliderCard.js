import React, { useContext } from "react";
import { Container, Label, SliderStyled } from "./styles";
import { GlobalStateContext } from "./../../contexts/GlobalStateContext";

export default function SliderCard() {

  const { sliderPrices, updateSliderRange } = useContext(GlobalStateContext);

  return (
    <Container>
      <Label>
        <p>Valores</p>
        <p>{`${sliderPrices[0]} - ${sliderPrices[1]}`}</p>
      </Label>

      <SliderStyled
        className="radio-btn"
        value={sliderPrices}
        onChange={updateSliderRange}
        min={0}
        max={5000}
        step={0.01}
      />
    </Container>
  );
}
