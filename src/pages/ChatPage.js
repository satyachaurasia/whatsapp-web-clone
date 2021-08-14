import React from "react";
import styled from "styled-components/macro";
import { ChatList, ChatWindow } from "../containers";

const Page = styled.div`
  height: 100vh;
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
`;

const Chat = () => {
  return (
    <Page>
      <ChatList />
      <ChatWindow />
    </Page>
  );
};

export default Chat;
