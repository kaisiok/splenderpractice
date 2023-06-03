import React, { useEffect } from "react";
import styled from "styled-components";

const NotificationContainer = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Notification = ({ message, handleNotification }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNotification(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <NotificationContainer>{message}</NotificationContainer>;
};

export default Notification;
