import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction:column;
margin-bottom:4.03125rem;
`;

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

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 2rem;
    color: #2c2c2c;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.5625rem;
  font-size: 1.125rem;
  color: #c4c4c4;
  cursor: pointer;

  &:hover {
    color: #696969;
  }
`;
