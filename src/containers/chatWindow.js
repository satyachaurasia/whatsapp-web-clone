import React, { useContext, useState, useEffect } from "react";
import { ChatWindow, LoginCard } from "../components";
import { UserContext } from "../context/UserContext";
import { db } from "../firebase";
import firebase from "firebase";
import { useList } from "react-firebase-hooks/database";

const chatWindowContainer = ({ children, ...restProps }) => {
  const { activeChatRoom, email, activeChat, setActiveChat } =
    useContext(UserContext);

  const [chatMessage, setChatMessage] = useState("");

  const activeGroupRef = db
    .ref(`chats/${activeChatRoom}`)
    .orderByChild("timestamp");

  const [snapshots, loading, error] = useList(activeGroupRef);

  activeChatRoom &&
    db
      .ref(`chats/${activeChatRoom}`)
      .orderByChild("status")
      .equalTo("received")
      .on("child_added", (snapshot) => {
        const { sent_by } = snapshot.val();

        if (sent_by !== email) {
          db.ref(`chats/${activeChatRoom}/${snapshot.key}`).update({
            status: "seen",
          });
        }
      });

  const sendMessage = () => {
    if (activeChatRoom) {
      const newPostKey = db.ref(`chats/${activeChatRoom}`).push().key;

      db.ref(`chats/${activeChatRoom}/${newPostKey}`).set({
        message: chatMessage,
        status: "sent",
        sent_by: email,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });
    } else {
      alert("No Chat Room Exists");
    }

    setChatMessage((prev) => "");
  };

  return (
    <ChatWindow {...restProps}>
      {children}
      {activeChatRoom === null ? (
        <LoginCard showLoginBtn={false} />
      ) : (
        <>
          <ChatWindow.Header>
            <ChatWindow.HeaderImage src={activeChat?.friendsPhotoUrl} />
            <ChatWindow.Title>{activeChat?.friendsEmail}</ChatWindow.Title>
            <ChatWindow.HeaderImage src="images/search.svg" />
            <ChatWindow.HeaderImage src="images/option.svg" />
          </ChatWindow.Header>
          <ChatWindow.ChatBox>
            {snapshots.map((data) => {
              const { message, sent_by, status, timestamp } = data.val();
              if (sent_by == email) {
                return (
                  <ChatWindow.SentChat key={data.key} status={status}>
                    {message}
                  </ChatWindow.SentChat>
                );
              } else {
                return (
                  <ChatWindow.ReceivedChat key={data.key} status={status}>
                    {message}
                  </ChatWindow.ReceivedChat>
                );
              }
            })}
          </ChatWindow.ChatBox>
          <ChatWindow.InputContainer>
            <ChatWindow.InputIcon src="images/emoji.svg" />
            <ChatWindow.InputIcon src="images/attach.svg" />
            <ChatWindow.ChatInput
              placeholder="type a message"
              onChange={(event) => setChatMessage((prev) => event.target.value)}
              onKeyPress={(event) => event.key === "Enter" && sendMessage()}
              value={chatMessage}
            />
            <ChatWindow.InputIcon src="images/mic.svg" />
          </ChatWindow.InputContainer>
        </>
      )}
    </ChatWindow>
  );
};

export default chatWindowContainer;
