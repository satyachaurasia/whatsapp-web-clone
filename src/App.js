import React, { useEffect, useState } from "react";
import Chat from "./pages/ChatPage";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./pages/LoginPage";
import firebase from "firebase";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [user, loading] = useAuthState(auth);

  const [activeChatRoom, setActiveChatRoom] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.ref(`users/${user.email.split(".").join(",")}`).update({
        email: user.email,
        lastSeen: firebase.database.ServerValue.TIMESTAMP,
        photoUrl: user.photoURL,
        online: true,
      });
    }
    return () => {};
  }, [user]);

  if (!user) return <LoginPage />;

  if (loading) return <h1>Loading.... Please Wait</h1>;

  db.ref(".info/connected").on("value", function (snapshot) {
    if (snapshot.val() == false) {
      return;
    }

    db.ref(`users/${user.email.split(".").join(",")}`)
      .onDisconnect()
      .update({
        lastSeen: firebase.database.ServerValue.TIMESTAMP,
        online: false,
      })
      .then(function () {
        db.ref(`users/${user.email.split(".").join(",")}`).update({
          lastSeen: firebase.database.ServerValue.TIMESTAMP,
          online: true,
        });
      });
  });

  const { email, photoURL } = user;

  return (
    <UserContext.Provider
      value={{
        email,
        photoURL,
        activeChatRoom,
        setActiveChatRoom,
        activeChat,
        setActiveChat,
      }}
    >
      <Chat />
    </UserContext.Provider>
  );
};

export default App;
