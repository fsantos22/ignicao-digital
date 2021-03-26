import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  cursor: default;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-family: Montserrat;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin-right: 2.6875rem;
    color: #2C2C2C;
  }
`;

export const PageIndex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  font-size: 0.875rem;
  padding-left: 0.8125rem;
  border-left: 1px solid #979797;

  & > p {
    font-family: Montserrat;
    font-weight: 400;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.0625rem;
  }

`;

export const SettingsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  background: #717171;
  border-radius: 50%;
  
  font-size: 1.125rem;
  color: #ffffff;

  cursor: pointer;
`;
