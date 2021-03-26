import React from 'react'
import { Container, Label, ItemContainer, CustomCheckbox } from "./styles";
import {FiCheck} from "react-icons/fi"

export default function CategoryBox() {
  const catItems=["Érico Rocha", "Desafio 6 em 7","Fórmula de Lançamento", "KlickPages", "Audios"]
  const catResults=[1920,1820,462,6556,120]
  return (
    <Container>
      <Label>
        <p>Categorias</p>
      </Label>
      {catItems.map(function(item,index){return (
        <ItemContainer>
          <CustomCheckbox>
            <input
              id={`check-${index + 1}`}
              hidden
              type="checkbox"
              value={`item-${index + 1}`}
              name={`item-${index + 1}`}
            />
            <label for={`check-${index + 1}`} className="checkmark">
              {/* <FiCheck/> */}
            </label>
          </CustomCheckbox>
          <div>
            <p>{item}</p>
            <span>{catResults[index]}</span>
          </div>
        </ItemContainer>
      );})}
    </Container>
  );
}
