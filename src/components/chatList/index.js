import React from "react";
import {
  CardImage,
  CardTitle,
  ContactCard,
  Header,
  HeaderImage,
  Inner,
  Pane,
  SearchBar,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles/chatList";

const ChatList = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

ChatList.Header = function ChatListHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};

ChatList.HeaderImage = function ChatListHeaderImage({
  children,
  ...restProps
}) {
  return <HeaderImage {...restProps} />;
};

ChatList.SearchContainer = function ChatListSearchContainer({
  children,
  ...restProps
}) {
  return <SearchContainer {...restProps}> {children} </SearchContainer>;
};

ChatList.SearchBar = function ChatListSearchBar({ children, ...restProps }) {
  return <SearchBar {...restProps}>{children}</SearchBar>;
};

ChatList.SearchIcon = function ChatListSearchIcon({ children, ...restProps }) {
  return <SearchIcon {...restProps} />;
};

ChatList.SearchInput = function ChatListSearchInput({
  children,
  ...restProps
}) {
  return <SearchInput {...restProps} />;
};

ChatList.ContactCard = function ChatListContactCard({
  children,
  active = false,
  online = false,
  ...restProps
}) {
  return (
    <ContactCard {...restProps} active={active} online={online}>
      {children}
    </ContactCard>
  );
};

ChatList.CardTitle = function ChatListCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}> {children}</CardTitle>;
};

ChatList.CardImage = function ChatListCardImage({ children, ...restProps }) {
  return <CardImage {...restProps} />;
};

ChatList.Inner = function ChatListInner({ children, ...restProps }) {
  return <Inner {...restProps}> {children}</Inner>;
};

export default ChatList;
