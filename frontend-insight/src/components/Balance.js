import React, {useState} from 'react'

function Balance() {
const [amount,setamount]=useState(200);
showForm = () => {
    return (
      <div> 
    <form>
      <label>Add the $ Amount:
        <input
          type="text" 
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
      </label>
          <button>Create</button>
       </form>
       </div>
      );
  }    

return (
        <div>
        
        </div>
    )
}

export default Balance
