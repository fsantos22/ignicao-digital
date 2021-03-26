import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top:4.880625rem;

  cursor: default;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 2.25rem;
  color: #999999;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9375rem;
  line-height: 2.5rem;
  color: #2c2c2c;

  cursor: pointer;

  &:hover {
    color: #ff7b1b;
  }
`;
