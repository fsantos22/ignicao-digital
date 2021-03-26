import React, { useState } from "react";
import {
  FiMail,
  FiMessageSquare,
  FiCheckSquare,
  FiCalendar,
  FiStar,
  FiBell,
  FiBellOff,
  FiSearch,
} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import {
  Container,
  RightSide,
  IconsContainer,
  ProfileContainer,
  UserName,
  UserStatus,
  ProfilePhoto,
} from "./styles";
import profile from "./images/Oval.png";

export default function Navbar() {
  const [notificationIsOn, setNotificationIsOn] = useState(false);
  const [starIsOn, setStarIsOn] = useState(false);
  const l_icons = [
    <FiMail />,
    <FiMessageSquare />,
    <FiCheckSquare />,
    <FiCalendar />,
    // <FiStar />,
  ];
  const r_icons = [<FiBell />, <FiSearch />];
  return (
    <Container>
      <IconsContainer>
        {l_icons.map((icon) => {
          return <div>{icon}</div>;
        })}
        {starIsOn ? (
          <div onClick={() => setStarIsOn(!starIsOn)}>
            <AiFillStar />
          </div>
        ) : (
          <div onClick={() => setStarIsOn(!starIsOn)}>
            <FiStar />
          </div>
        )}
      </IconsContainer>
      <RightSide>
        <IconsContainer>
          {notificationIsOn ? (
            <div onClick={() => setNotificationIsOn(!notificationIsOn)}>
              <FiBellOff />
            </div>
          ) : (
            <div onClick={() => setNotificationIsOn(!notificationIsOn)}>
              <FiBell />
            </div>
          )}
          <div>
            <FiSearch />
          </div>
        </IconsContainer>
        {/* <IconsContainer>
          {r_icons.map((icon) => {
            return <div>{icon}</div>;
          })}
        </IconsContainer> */}
        <ProfileContainer>
          <div>
            <UserName>Maria Elza</UserName>
            <UserStatus>Cliente VIP</UserStatus>
          </div>
          <ProfilePhoto photo={profile}></ProfilePhoto>
        </ProfileContainer>
      </RightSide>
    </Container>
  );
}
