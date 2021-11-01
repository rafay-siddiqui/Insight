import { useState, useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import Button from "./Button";
import "./login.css";
import 'font-awesome/css/font-awesome.min.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = function (event) {
    event.preventDefault();
    email && login(email, password);
  };

  return (
    <div class="content-bottom">
      <form onSubmit={onSubmit}>
        <div class="field-group">
          <span class="fa fa-user" aria-hidden="true"></span>
          <div class="wthree-field">
            <input
              type="text"
              name="username"
              value={email}
              placeholder="Enter Username/Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div class="field-group">
          <span class="fa fa-lock" aria-hidden="true"></span>
          <div class="wthree-field">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div class="wthree-field">
          <Button to="/portfolio" login>Login</Button> &ensp;
        </div>
      </form>
    </div>
  );
}
