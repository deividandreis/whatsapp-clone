import React from "react";
import "./ChatListItem.css";

const ChatListItem = ({ onClick, active, data }) => {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem-avatar" src={data.avatar} alt="avatar" />

      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{data.title}</div>
          <div className="chatListItem-date">20:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              molestiae totam nam sed illum amet assumenda soluta facilis ad.
              Id, aut. Accusamus aliquam, omnis fuga possimus dolorem impedit
              ipsam repudiandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
