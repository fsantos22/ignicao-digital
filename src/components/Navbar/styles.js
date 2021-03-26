import styled from "styled-components";

export const Container = styled.div`

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 100%;
  height: 3.875rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.125rem;
  margin: 1.375rem;
  gap: 1.375rem;

  cursor: pointer;
  & > div {
    transition: all 0.2s;
  }
  & > div:hover {
    color: #ff7b1b;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.375rem;
  margin-left: 0;

  cursor: default;
`;

export const UserName = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #2C2C2C;
  text-align: right;
`;

export const UserStatus = styled.div`
  font-family: Montserrat;
  font-weight: 300;
  font-style: normal;
  font-size: 0.6875rem;
  line-height: 0.8125rem;
  color: #2c2c2c;
  text-align: right;
`;

export const ProfilePhoto = styled.div`
  width: 2.125rem;
  height: 2.125rem;
  margin: 0.875rem 0;
  margin-left: 0.3125rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  background: url(${props=>props.photo});
  background-position:center;
  background-repeat:no-repeat;
  background-size: cover;
  border-radius:50%;
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.235413);
`;
