import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: red;
  width: 100%;
  height: 15.625rem;
  padding: 1.25rem;
  padding-left: 0.625rem;

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  display: flex;

  cursor: default;
`;

export const Thumb = styled.div`
  background: green;
  min-width: 13.3125rem;
  height: 100%;
  margin-right: 1.4375rem;

  background: url(${(props) => props.thumb});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextContainer = styled.div`
  border-right: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 21rem;
  padding-right: 1.4375rem;
  cursor: default;

  h3 {
    font-family: Montserrat;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #2c2c2c;
    padding-top: 0.6875rem;
  }
  h4 {
    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
    font-size: 0.75rem;
    line-height: 0.1875rem;
    color: #2c2c2c;
    padding-top: 0.4375rem;
    padding-bottom: 1.375rem;
  }
  span {
    font-family: Montserrat;
    font-weight: 700;
    font-style: normal;
    font-size: 0.75rem;
    line-height: 0.1875rem;
    color: #2c2c2c;
  }
  P {
    font-family: Montserrat;
    font-weight: 300;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.4375rem;
    color: #2c2c2c;
    overflow-y: auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1.273125rem;

  width: clamp(14rem, 15vw,14.148125rem);
  min-width: 14.148125rem;
  height: 100%;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-end;
    gap: 1.1875rem;

    & > span {
      align-self: center;
      font-family: Montserrat;
      font-weight: 400;
      font-style: normal;
      font-size: 1.125rem;
      line-height: 1.3125rem;
      color: #2C2C2C;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
`;

export const RatingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 1.875rem;

  background: #787878;
  border-radius: 3px;

  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #ffffff;

  span {
    padding-right: 0.56875rem;
  }
`;
