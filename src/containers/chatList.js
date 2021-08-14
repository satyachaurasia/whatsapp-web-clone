import React, { useState } from "react";
import { ChatList } from "../components";

const personFixtures = [
  {
    id: 7,
    name: "Satya",
    online: true,
  },
  {
    id: 6,
    name: "Bruce Wayne",
    online: false,
  },
  {
    id: 3,
    name: "Clark Kent",
    online: false,
  },
  {
    id: 4,
    name: "Barry Allen",
    online: false,
  },
  {
    id: 5,
    name: "Steve Rogers",
    online: true,
  },
  {
    id: 8,
    name: "Wolverine",
    online: false,
  },
  {
    id: 9,
    name: "John Doe",
    online: false,
  },
  {
    id: 10,
    name: "Lorem Ipsum",
    online: true,
  },
  {
    id: 11,
    name: "Joe",
    online: false,
  },
  {
    id: 12,
    name: "John",
    online: false,
  },
  {
    id: 13,
    name: "Mark",
    online: true,
  },
  {
    id: 14,
    name: "Katherine",
    online: false,
  },
];

const chatListContainer = ({ children, ...restProps }) => {
  const [activeId, setActiveId] = useState(null);
  return (
    <ChatList {...restProps}>
      {children}
      <ChatList.Header>
        <ChatList.HeaderImage src="https://source.unsplash.com/random/70x70?sig=1" />
        <ChatList.HeaderImage src="images/status.svg" />
        <ChatList.HeaderImage src="images/chat.svg" />
        <ChatList.HeaderImage src="images/option.svg" />
      </ChatList.Header>

      <ChatList.SearchContainer>
        <ChatList.SearchBar>
          <ChatList.SearchIcon src="images/smallSearch.svg" />
          <ChatList.SearchInput placeholder="search or start a new chat" />
        </ChatList.SearchBar>
      </ChatList.SearchContainer>

      <ChatList.Inner>
        {personFixtures.map((data) => (
          <ChatList.ContactCard
            active={data.id === activeId}
            online={data.online}
            key={data.id}
            onClick={() => setActiveId((prev) => data.id)}
          >
            <ChatList.CardImage
              src={`https://source.unsplash.com/random/70x70?sig=${data.id}`}
            />
            <ChatList.CardTitle>{data.name}</ChatList.CardTitle>
          </ChatList.ContactCard>
        ))}
      </ChatList.Inner>
    </ChatList>
  );
};

export default chatListContainer;
