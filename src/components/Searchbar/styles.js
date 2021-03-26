import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.75rem;
  input {
    width: 100%;
    height: 3.875rem;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    outline: none;
    border: none;
    padding: 1.0625rem 3rem 1.1875rem 1.873125rem;

    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
    font-size: 1.375rem;
    line-height: 1.625rem;
  }

  span {
    position: absolute;
    height: 100%;
    top: 35%;
    right: 3%;
    font-size: 1.125rem;
  }
`;
