import React from "react";
import {
  ChatBox,
  ChatInput,
  Header,
  HeaderImage,
  InputContainer,
  InputIcon,
  Pane,
  SentChat,
  Title,
  ReceivedChat,
} from "./styles/chatWindow";

const ChatWindow = ({ children, ...restProps }) => {
  return <Pane {...restProps}> {children}</Pane>;
};

ChatWindow.Header = function ChatWindowHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};

ChatWindow.HeaderImage = function ChatWindowHeaderImage({
  children,
  ...restProps
}) {
  return <HeaderImage {...restProps} />;
};

ChatWindow.Title = function ChatWindowTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ChatWindow.ChatBox = function ChatWindowChatBox({ children, ...restProps }) {
  return <ChatBox {...restProps}> {children} </ChatBox>;
};

ChatWindow.InputContainer = function ChatWindowInputContainer({
  children,
  ...restProps
}) {
  return <InputContainer {...restProps}> {children}</InputContainer>;
};

ChatWindow.InputIcon = function ChatWindowInputIcon({
  children,
  ...restProps
}) {
  return <InputIcon {...restProps} />;
};

ChatWindow.ChatInput = function ChatWindowChatInput({
  children,
  ...restProps
}) {
  return <ChatInput {...restProps} />;
};

ChatWindow.SentChat = function ChatWindowSentChat({
  children,
  status = "seen",
  ...restProps
}) {
  return (
    <SentChat status={status} {...restProps}>
      {children}
    </SentChat>
  );
};

ChatWindow.ReceivedChat = function ChatWindowReceivedChat({
  children,
  ...restProps
}) {
  return <ReceivedChat {...restProps}>{children}</ReceivedChat>;
};

export default ChatWindow;
