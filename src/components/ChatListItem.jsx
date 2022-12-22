import React from "react";
import "./ChatListItem.css";

const ChatListItem = ({onClick, active}) => {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img
        className="chatListItem-avatar"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="avatar"
      />

      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">Deivid Andreis</div>
          <div className="chatListItem-date">20:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae totam nam sed illum amet assumenda soluta facilis ad. Id, aut. Accusamus aliquam, omnis fuga possimus dolorem impedit ipsam repudiandae.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
