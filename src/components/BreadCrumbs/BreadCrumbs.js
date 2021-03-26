import React from "react";
import { FiHome, FiSettings, FiChevronsRight } from "react-icons/fi";
import { Container, LeftSide, PageIndex, SettingsIcon } from "./styles";
import chevrons from "./images/chevrons-right.png";

export default function BreadCrumbs() {
  return (
    <Container>
      <LeftSide>
        <p>Resultados</p>
        <PageIndex>
          <FiHome />
          <FiChevronsRight/>
          <p>Cursos</p>
        </PageIndex>
      </LeftSide>
      <SettingsIcon>
        <FiSettings />
      </SettingsIcon>
    </Container>
  );
}
