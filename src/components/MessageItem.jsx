import React, { useState, useEffect } from "react";
import "./MessageItem.css";

const MessageItem = ({ data, user }) => {

  const [time, setTime] = useState("");

  useEffect(() => {
    if (data.date > 0) {
      let d = new Date(data.date.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  }, [data]);

  return (
    <div
      className="messageLine"
      style={{ justifyContent: user.id == data.autor ? "flex-start" : "flex-end" }}>
      <div
        className="messageItem"
        style={{ backgroundColor: user.id === data.autor ? "#dcf8c6" : "#c4ffba" }}>
        <div className="messageText">{data.body}</div>
        <div className="messageData">{time}</div>
      </div>
    </div>
  );
};

export default MessageItem;
