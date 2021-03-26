import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-family: Montserrat;
    font-weight: 600;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #2c2c2c;
    margin-bottom: 1.3125rem;
  }
`;

export const RadioItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const RadioButton = styled.label`
cursor: pointer;
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  & > span {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid #969696;
  }
  input:checked + span{
      background: #969696;;
  }
  display: flex;
  align-items: center;
  line-height: 1;
  transform: translateY(-0.05em);
`;

export const Label = styled.span`
  font-family: Montserrat;
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
  line-height: 2rem;
  color: #2c2c2c;
`;
