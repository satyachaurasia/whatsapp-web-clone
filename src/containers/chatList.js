import React, { useState, useContext } from "react";
import { ChatList } from "../components";
import { UserContext } from "../context/UserContext";
import { auth, db } from "../firebase";
import firebase from "firebase";
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
  const { email, photoURL, activeChatRoom, setActiveChatRoom } =
    useContext(UserContext);

  const createChatRoom = () => {
    const emailRe =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      emailRe.test(String(friendsEmail).toLowerCase()) &&
      email &&
      email !== friendsEmail
    ) {
      const chatRoomName =
        email > friendsEmail ? email + friendsEmail : friendsEmail + email;

      const editedChatRoom = chatRoomName.split(".").join(",");

      const chatRoomRef = db.ref(`chats/${editedChatRoom}`);

      chatRoomRef.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
          alert("Exist");
        } else {
          db.ref(`users/${friendsEmail.split(".").join(",")}`).update({
            email: friendsEmail,
          });

          db.ref(`chats/${editedChatRoom}`).set([
            {
              message: "Hi",
              status: "sent",
              sent_by: email,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
            },
          ]);

          db.ref(
            `users/${friendsEmail.split(".").join(",")}/friends/${email
              .split(".")
              .join(",")}`
          ).update({
            email: email,
            chatRoom: editedChatRoom,
          });

          db.ref(
            `users/${email.split(".").join(",")}/friends/${friendsEmail
              .split(".")
              .join(",")}`
          ).update({
            email: friendsEmail,
            chatRoom: editedChatRoom,
          });

          alert("Created");
          setFriendsEmail("");
        }
      });
    } else {
      alert("Email Wrong");
    }
  };

  const getEmailFormatted = (email) => email.split(".").join(",");

  const chatRef = db.ref(`users/${getEmailFormatted(email)}/friends`);

  const [snapshots, loading, error] = useList(chatRef);

  const [friendsEmail, setFriendsEmail] = useState("");

  snapshots.map((data) => {
    const { email, chatRoom } = data.val();

    db.ref(`chats/${chatRoom}`)
      .orderByChild("status")
      .equalTo("sent")
      .on("child_added", (snapshot) => {
        const { sent_by } = snapshot.val();

        if (sent_by === email) {
          db.ref(`chats/${chatRoom}/${snapshot.key}`).update({
            status: "received",
          });
        }
      });
  });

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

      <ChatList.SearchContainer>
        <ChatList.SearchBar>
          <ChatList.SearchIcon src="images/smallSearch.svg" />
          <ChatList.SearchInput
            placeholder="enter a email to chat"
            onChange={(event) => setFriendsEmail((prev) => event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && createChatRoom()}
            value={friendsEmail}
          />
        </ChatList.SearchBar>
      </ChatList.SearchContainer>

      <ChatList.Inner>
        {snapshots.map((data, index) => {
          const { email, chatRoom } = data.val();
          return (
            <ChatList.ContactCard
              active={chatRoom === activeChatRoom}
              online={false}
              key={data.key}
              onClick={() => setActiveChatRoom((prev) => chatRoom)}
            >
              <ChatList.CardImage
                src={`https://source.unsplash.com/random/70x70?sig=${
                  index + 3
                }`}
              />
              <ChatList.CardTitle>{email}</ChatList.CardTitle>
            </ChatList.ContactCard>
          );
        })}
      </ChatList.Inner>
    </ChatList>
  );
};

export default chatListContainer;
