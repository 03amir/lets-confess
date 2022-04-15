import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import "../Styles/homePage.css";

function App() {
  const [confessions, setConfessions] = useState([]);

  //fetching all the confessions

  useEffect(() => {
    Axios.get("https://openletterr.herokuapp.com/").then((res) => {
      setConfessions(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="confessText">
        <h2>Past Confessions</h2>
        <div className="underline"></div>
      </div>

      <div className="confessions">
        {confessions.map((confession) => {
          return (
            <div className="card" key={confession._id}>
              <h5>To : {confession.msgTo} </h5>
              <div className="singleConfession">
                <h3>{confession.msg}</h3>
              </div>

              <div className="right">
                <h5>From : {confession.msgFrom} </h5>
                <h6>{confession.createdAt.substring(0, 10)}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
