import React from "react";
import Brand from "../Brand/Brand";
import SelectArea from "../SelectArea/SelectArea";
import Apps from "../Apps/Apps";

import { Container } from "./styles";

export default function VerticalMenu() {
  return (
    <Container>
      <Brand />
      <SelectArea />
      <Apps />
    </Container>
  );
}
