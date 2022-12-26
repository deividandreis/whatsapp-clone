import React, { useState } from "react";
import "./NewChat.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NewChat = ({ user, cahtList, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      nome: "Deivid",
    },
    {
      id: 123,
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      nome: "Deivid",
    },
    {
      id: 123,
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      nome: "Deivid",
    },
    {
      id: 123,
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      nome: "Deivid",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="newchat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat-head">
        <div className="newChat-backbutton" onClick={handleClose}>
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat-headtitle">Nova Conversa</div>
      </div>

      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemavatar" src={item.avatar} />
            <div className="newChat-itemname">{item.nome}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
