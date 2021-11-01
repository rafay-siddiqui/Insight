import React, { useState } from "react";

function Balance(props) {
  const [amount, setAmount] = useState()
  return (
    <div>
      <form>
        <label>
          Add the $ Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button onClick={(event) => {
          event.preventDefault();
          props.addBalance(amount);
          setAmount("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default Balance;
