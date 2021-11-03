import React, { useState } from "react";
import Button from "./Button";
import "./balance.scss";

export default function AddBalance(props) {
  const [amount, setAmount] = useState()
  return (
    <div>
      <form class="form">
        <label >
         <b> Add the $ Amount: </b>
          <input class="input"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <Button onClick={(event) => {
          event.preventDefault();
          props.addBalance(amount);
          setAmount("");
        }}>ADD</Button>
      </form>
    </div>
  );
}
