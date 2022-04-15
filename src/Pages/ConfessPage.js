import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/confessPage.css";

function ConfessPage() {

  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
  const [msgTo, setMsgTo] = useState("");
  const [msgFrom, setMsgFrom] = useState("");

  function addMsg() {

    //not sending a empty confession

    if (msg && msgFrom && msgTo) {
      Axios.post("hhttps://openletterr.herokuapp.com/", {
        msg: msg,
        msgTo: msgTo,
        msgFrom: msgFrom,
      });

      //clearing all the fields
      setMsg("");
      setMsgTo("");
      setMsgFrom("");
    }
  }

  return (
    <div className="confessFrame">
      <div>
        <form className="inputBox">
          <input
            required
            type="text"
            placeholder="To"
            onChange={(event) => {
              setMsgTo(event.target.value);
            }}
          />

          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your  Confession"
            value={msg}
            onChange={(event) => {
              setMsg(event.target.value);
            }}
          ></textarea>

          <input
            required
            type="text"
            placeholder="From (Not your real name here)"
            onChange={(event) => {
              setMsgFrom(event.target.value);
            }}
          />

          <button
            onClick={() => {
              addMsg();
              navigate("/");
            }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfessPage;
