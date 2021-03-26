import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  
  width: 100%;
  margin-bottom: 1.375rem;

  cursor: default;

  #filterBarLabel1 {
    margin-right: 1.8125rem;
    width: clamp(12.3667rem, 19.3221vw, 23.1875rem);
  }
  #filterBarAuxContainer {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
  }

  #custom-arrow {
    position: absolute;
    top: 0;
    right: 0;
    display: block;

    height: 100%;
    width: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
`;

export const FilterText = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 1.125rem;
  line-height: 1.3125rem;
`;

export const RSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  #select-container {
    position: relative;
  }
`;

export const Select = styled.select`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 8.4375rem;
  height: 2.5rem;
  padding: 0.625rem 0.875rem 0.8125rem 0.875rem;
  appearance: none;

  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  cursor: pointer;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 2.5rem;
  height: 2.5rem;

  font-size: 1rem;
`;
