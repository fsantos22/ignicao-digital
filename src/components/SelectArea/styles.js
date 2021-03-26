import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  #select-icon {
    position: absolute;
    top: 0;
    left: 0;
    display: block;

    height: 100%;
    width: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  #custom-arrow {
    position: absolute;
    top: 0;
    right: 0;
    display: block;

    height: 100%;
    width: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
`;

export const Select = styled.select`
  background: #ececec;
  border-radius: 4px;
  padding: 0.5625rem 1.7rem 0.8125rem 2.125rem;

  width: 100%;
  height: 2.25rem;
  border-radius: 4px;
  background: #ececec;

  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9375rem;
  line-height: 1rem;

  appearance: none;
  cursor: pointer;
`;
