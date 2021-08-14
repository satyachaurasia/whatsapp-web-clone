import React from "react";
import { ChatWindow } from "../components";

const chatWindowContainer = ({ children, ...restProps }) => {
  return (
    <ChatWindow {...restProps}>
      {children}
      <ChatWindow.Header>
        <ChatWindow.HeaderImage src="https://source.unsplash.com/random/70x70?sig=2" />
        <ChatWindow.Title>Satya</ChatWindow.Title>
        <ChatWindow.HeaderImage src="images/search.svg" />
        <ChatWindow.HeaderImage src="images/option.svg" />
      </ChatWindow.Header>
      <ChatWindow.ChatBox>
        <ChatWindow.SentChat>Hiii</ChatWindow.SentChat>
        <ChatWindow.ReceivedChat>LOL</ChatWindow.ReceivedChat>
      </ChatWindow.ChatBox>
      <ChatWindow.InputContainer>
        <ChatWindow.InputIcon src="images/emoji.svg" />
        <ChatWindow.InputIcon src="images/attach.svg" />
        <ChatWindow.ChatInput placeholder="type a message" />
        <ChatWindow.InputIcon src="images/mic.svg" />
      </ChatWindow.InputContainer>
    </ChatWindow>
  );
};

export default chatWindowContainer;
