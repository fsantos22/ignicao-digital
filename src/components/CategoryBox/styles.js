import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.59375rem;

  & > p {
    font-family: Montserrat;
    font-weight: 600;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #2c2c2c;
  }
`;

export const CustomCheckbox = styled.div`
  position: relative;

  .checkmark::before {
    display: none;
  }
  .checkmark {
    display: block;

    width: 1.0625rem;
    height: 1.0625rem;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 3px;

    cursor: pointer;
  }
  input:checked ~ .checkmark {
    background: #969696;
  }
  .checkmark::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(40deg);

    width: 0.25rem;
    height: 0.55rem;

    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  width: 100%;

  & > input {
    cursor: pointer;
  }

  div:last-child {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  p {
    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
    font-size: 1rem;
    /* line-height: 2rem; */
    color: #2c2c2c;
  }

  span {
    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 2rem;
    color: #2c2c2c;
  }
`;
