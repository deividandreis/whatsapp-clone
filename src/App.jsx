import React, { useState, useEffect } from "react";
import "./App.css";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";
import Api from "./api";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [user, setUser] = useState(null);
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "fulano",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      chatId: 2,
      title: "fulano",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      chatId: 3,
      title: "fulano",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      chatId: 4,
      title: "fulano",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    await Api.addUser(newUser);
    setUser(newUser);
  };

  if (user === null) {
    return <Login onRecive={handleLoginData} />;
  }

  return (
    <div className="app">
      <div className="sidebar">
        <NewChat
          show={showNewChat}
          setShow={setShowNewChat}
          user={user}
          chatlist={chatList}
        />
        <header>
          <img className="header-avatar" src={user.avatar} alt="avatar" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn" onClick={handleNewChat}>
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              onClick={() => setActiveChat(chatList[key])}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
