import React, { useState, useContext } from "react";
import { ChatList } from "../components";
import { UserContext } from "../context/UserContext";
import { auth, db } from "../firebase";
import { useList } from "react-firebase-hooks/database";

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
  const { email, photoURL, activeChatRoom, setActiveChatRoom, setActiveChat } =
    useContext(UserContext);

  const generateChatRoomId = (email1, email2) =>
    email1 > email2
      ? getEmailFormatted(email1) + getEmailFormatted(email2)
      : getEmailFormatted(email2) + getEmailFormatted(email1);

  const getEmailFormatted = (email) => email.split(".").join(",");

  const allUsersRef = db.ref("users/").orderByChild("online");

  const [snapshots, loading, error] = useList(allUsersRef);

  snapshots.map((data) => {
    const { email: friendsEmail } = data.val();

    const tempChatRoom = generateChatRoomId(email, friendsEmail);

    db.ref(`chats/${tempChatRoom}`)
      .orderByChild("status")
      .equalTo("sent")
      .on("child_added", (snapshot) => {
        const { sent_by } = snapshot.val();

        if (sent_by === friendsEmail) {
          db.ref(`chats/${tempChatRoom}/${snapshot.key}`).update({
            status: "received",
          });
        }
      });
  });

  const handleCardClick = (friendsEmail, friendsPhotoUrl) => {
    setActiveChat((prev) => ({ friendsEmail, friendsPhotoUrl }));
    setActiveChatRoom((prev) => generateChatRoomId(email, friendsEmail));
  };

  return (
    <ChatList {...restProps}>
      {children}
      <ChatList.Header>
        <ChatList.HeaderImage
          src={photoURL}
          onClick={() => auth.signOut() && location.reload()}
        />
        <ChatList.HeaderImage src="images/status.svg" />
        <ChatList.HeaderImage src="images/chat.svg" />
        <ChatList.HeaderImage src="images/option.svg" />
      </ChatList.Header>

      <ChatList.Inner>
        {snapshots.length <= 1 && (
          <ChatList.ContactCard>
            No one here ask someone to login to chat
          </ChatList.ContactCard>
        )}
        {snapshots.map((data, index) => {
          const {
            email: friendsEmail,
            photoUrl: friendsPhotoUrl,
            online,
          } = data.val();

          if (email !== friendsEmail) {
            const chatRoom = generateChatRoomId(email, friendsEmail);

            return (
              <ChatList.ContactCard
                active={chatRoom === activeChatRoom}
                online={online}
                key={data.key}
                onClick={() => handleCardClick(friendsEmail, friendsPhotoUrl)}
              >
                <ChatList.CardImage src={friendsPhotoUrl} />
                <ChatList.CardTitle>{friendsEmail}</ChatList.CardTitle>
              </ChatList.ContactCard>
            );
          }
        })}
      </ChatList.Inner>
    </ChatList>
  );
};

export default chatListContainer;
