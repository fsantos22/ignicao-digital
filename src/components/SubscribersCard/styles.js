import styled from "styled-components";

export const Wrapper=styled.div`
min-height:100%;
display: flex;
flex-direction:column;
`

export const Container = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  cursor: default;

  width: 100%;
  flex-grow: 1;
  padding: 1.5625rem 2rem;

  .btn-container {
    padding: 0 0.875rem;
  }
`;

export const Divider = styled.hr`
  margin-top: 1.46875rem;
  margin-bottom: 2.09375rem;
  border: none;
  border-top: 1px solid #d6d6d6;
`;

export const FilterText = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.375rem;
`;
