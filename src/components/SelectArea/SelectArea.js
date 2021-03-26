import React from "react";
import { Container, Select } from "./styles";
import { FiHome, FiChevronDown } from "react-icons/fi";

export default function SelectArea() {
  return (
    <Container>
      <Select>
        <option>Área do Cliente</option>
        <option>Área 2</option>
        <option>Área 3</option>
      </Select>
      <span id="custom-arrow">
        <FiChevronDown />
      </span>
    </Container>
  );
}
