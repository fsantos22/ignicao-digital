import React from "react";
import { Container, Title, MenuItem } from "./styles";
import {
  FiMail,
  FiMessageSquare,
  FiCheckSquare,
  FiCalendar,
} from "react-icons/fi";

export default function Apps() {
  const icons = [
    <FiMail />,
    <FiMessageSquare />,
    <FiCheckSquare />,
    <FiCalendar />,
  ];
  const textIcons = ["Email", "Conversar", "ToDo", "Calendário"];

  return (
    <Container>
      <Title>APPS</Title>

      {icons.map(function (item, index) {
        return (
          <MenuItem>
            {item}
            <p>{textIcons[index]}</p>
          </MenuItem>
        );
      })}
    </Container>
  );
}
