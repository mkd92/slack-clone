import db from "../../../firebase";

import "./ChatInput.css";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { useStateValue } from "./../../../state/StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      addDoc(collection(doc(collection(db, "rooms"), channelId), "messages"), {
        message: input,
        timeStamp: serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
