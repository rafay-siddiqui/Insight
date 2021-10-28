import { useState, useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import Button from "./Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = function (event) {
    event.preventDefault();
    email && login(email, password);
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={email}
          placeholder="Enter Username or email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button login>Login</Button>
      </form>
    </div>
  );
}
