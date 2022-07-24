import React, { useEffect, useState } from 'react'
import SignOut from "./SignOut.js";
import {auth, db} from "../firebase.js"
import SendMessage from './SendMessage.js';

function Line() {
  // どこの変数に格納するのか
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((sanpshot) => {
      setMessages(sanpshot.docs.map((doc) => doc.data()))
    });
  }, [])
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "send" : "reseived"}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line