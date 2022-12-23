import React from "react";
import "./MessageItem.css";

const MessageItem = ({ data, user }) => {
  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user.id == data.autor ? "flex-end" : "flex-start",
      }}>
      <div
        className="messageItem"
        style={{
          backgroundColor: user.id === data.autor ? "#dcf8c6" : "#fff",
        }}>
        <div className="messageText">{data.body}</div>
        <div className="messageData">12:00</div>
      </div>
    </div>
  );
};

export default MessageItem;
