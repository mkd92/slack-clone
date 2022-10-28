import React from "react";
import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../../../state/StateProvider";
import { actionTypes } from "../../../state/reducer";

import "./Login.css";
import Button from "@mui/material/Button";
function Login() {
  const [stateValue, dispatch] = useStateValue();
  const signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="../../../img/slack_logo.png" alt="" />
        <h1>Signin to Clever programmer</h1>
        <p>clever programmer</p>
        <Button onClick={signin}> Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
