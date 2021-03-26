import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.8125rem;
  color: #2c2c2c;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    background: #686868;
    color: #ffffff;
  }

  .arrow {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.75rem;
    margin: 0 1.0625rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #ededed;
    border-radius: 50%;

    cursor: pointer;
  }
  
  .arrow:hover {
    background: #686868;
    color: #ffffff;
    transition: all 0.2s;
  }

  .main {
    height: 2.5rem;
    width: fit-content;
    background: #ededed;
    border-radius: 1.5rem;
    padding: 0.625rem 1.15rem;

    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.3125rem;

    display: flex;
    gap: 0.5rem;

    div {
      padding: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s;
    }
    div:active,
    div:hover {
      background: #686868;
      color: #ffffff;
    }
  }
`;
