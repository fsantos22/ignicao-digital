import React, {useContext} from "react";
import { Container, RadioItem, RadioButton, Label } from "./styles";
import { GlobalStateContext } from "./../../contexts/GlobalStateContext";

export default function MultiRange() {
  const radioItems = ["R$10", "R$10-R$100", "R$100-R$500", "R$500", "Todos"];
  const priceRanges = [[0,10], [10,100], [100,500], [500, 5000], [0,5000]];

  const { priceRangeRadioClick } = useContext(GlobalStateContext);

  return (
    <Container>
      <p>Preços</p>
      {radioItems.map(function (item, index) {
        return (
          <RadioItem>
            <RadioButton onClick={() => priceRangeRadioClick()}>
              <input type="radio" name="radio-btn" value={priceRanges[index]} />
              <span></span>
            </RadioButton>
            <Label>{item}</Label>
          </RadioItem>
        );
      })}
    </Container>
  );
}
