import React,{useState} from "react";

function Email(){
    const[email, setemail] = useState("");

    const handlechange = (event) => {
        setemail(event.target.value);
    };

    const handlesubmit = () =>{
        alert(`Email entered: ${email}`);

    };

    return(
        <div>
            <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={handlechange}
             />
    <button onClick={handlesubmit}>submit</button>
 </div>

 );
        
}
export default Email;