import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.19375rem;

  display: flex;
  align-items: center;
  gap: 0.378125rem;
  padding: 0 1.25rem;
  margin-bottom: 1.61875rem;

  cursor: default;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-width: 3.19375rem;
  min-height: 3.19375rem;
  border-radius: 50%;
  background: #ff7b1b;

  img {
    width: 40.11742%;
    height: 51.25245%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ff7b1b;
  font-family: PT sans;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.29375rem;
  white-space:nowrap;
`;
