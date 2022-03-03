import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/").then((res) => {
      setConfessions(res.data);
    });
  }, [confessions]);

  function addMsg() {
    Axios.post("http://localhost:8000/", {
      msg: msg,
    });
    console.log(msg);
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

        <div className="confessText">
          <h2>Past Confession</h2>
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
    </div>
  );
}

export default App;
