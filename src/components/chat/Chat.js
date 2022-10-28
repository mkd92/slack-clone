import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatMessage from "./chatMessage/ChatMessage";

import "./Chat.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "../../firebase.js";
import {
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      onSnapshot(doc(collection(db, "rooms"), roomId), (snapshot) => {
        setRoomDetails(snapshot.data());
      });
      //   // db.collection("rooms")
      //   //   .doc(roomId)
      //   //   .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    let q = query(
      collection(doc(collection(db, "rooms"), roomId), "messages"),
      orderBy("timeStamp", "asc")
    );
    getDocs(q).then((docs) => {
      setRoomMessages(docs.docs.map((doc) => doc.data()));
    });
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map(({ message, timeStamp, user, userImage }) => (
          <ChatMessage
            message={message}
            timestamp={timeStamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
