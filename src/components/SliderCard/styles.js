import styled from "styled-components";
import { Slider } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:first-child {
    font-family: Montserrat;
    font-weight: 600;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #2c2c2c;
  }

  p:last-child {
    font-family: Montserrat;
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #2c2c2c;
  }
`;

export const SliderStyled = styled(Slider)`
  && {
    color: #606060;
    margin-top: 1.3125rem;
  }
`;
