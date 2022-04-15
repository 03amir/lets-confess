import React from "react";
import "../Styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="buttonBox">

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Past Confessions
        </button>

        <button
          onClick={() => {
            navigate("/confess");
          }}
        >
          Confess Now
        </button>
        
      </div>
    </div>
  );
}

export default Navbar;
