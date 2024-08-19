import { useState } from "react";
import React from "react";
function App() {
  const[firstName, setFirstName]=useState('');
  const[lasttName, setLastName]=useState('');
  const[fullName, setFullName]=useState('');
  const [submitted,setSubmitted]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName && lasttName){
      setFullName(`${firstName}` + ` ${lasttName}`);
      setSubmitted(true);
    }

  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
          type="text"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          required

         />
         <br/>
          <label> Last Name: </label>
          <input
          type="text"
          value={lasttName}
          onChange={(e)=>setLastName(e.target.value)}
          required

         />
        </div>
        <button type="submit">Submit</button>
   </form>
   {submitted&&(
   <div>
   Full Name: {fullName}
    </div>)}
    
    </div>
  );
}

export default App;
