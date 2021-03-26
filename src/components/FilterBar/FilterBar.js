import React from "react";
import { FiGrid, FiMenu, FiChevronDown } from "react-icons/fi";
import { Container, FilterText, RSide, Select, IconBox } from "./styles";

export default function FilterBar() {
  return (
    <Container>
      {/* <FilterText id="filterBarLabel1">Filtros</FilterText> */}
      <div id="filterBarAuxContainer">
        <FilterText>200 resultados encontrados</FilterText>
        <RSide>
          <div id="select-container">
            <Select>
              <option>Listagem</option>
            </Select>
            <span id="custom-arrow">
              <FiChevronDown />
            </span>
          </div>
          <IconBox>
            <FiGrid />
          </IconBox>
          <IconBox>
            <FiMenu />
          </IconBox>
        </RSide>
      </div>
    </Container>
  );
}
