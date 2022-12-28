import React from "react";
import "./Login.css";

import Api from "../api";

const Login = ({ onRecive }) => {

  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onRecive(result.user);
    } else {
      alert("Erro ...");
    }
  };

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com o facebook</button>
    </div>
  );
};

export default Login;
