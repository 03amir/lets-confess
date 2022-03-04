import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    Axios.get("https://lets-confess.herokuapp.com/").then((res) => {
      setConfessions(res.data);
    });
  }, [confessions]);

  function addMsg() {
    Axios.post("https://lets-confess.herokuapp.com/", {
      msg: msg,
    });
   // console.log(msg);
    setMsg("");
  }

  return (
    <div className="App">
      <h1>Open Letter</h1>
      <div className="inputBox">
        <input
          type="text"
          name="msg"
          id="msg"
          value={msg}
          placeholder="Confess Something"
          onChange={(event) => {
            setMsg(event.target.value);
          }}
        />
        <button onClick={addMsg}>Add</button>
        </div>

        <div className="confessText">
          <h2>Past Confessions</h2>
          <div className="underline"></div>
        </div>

        <div className="confessions">
        
          {confessions.map((msg) => {
            return (
              <div className="card" key={msg._id}>
                <h3>{msg.msg}</h3>
              </div>
            );
          })}
        </div>
     
    </div>
  );
}

export default App;
