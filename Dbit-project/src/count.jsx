import React,{useState} from "react";

function Count(){
    const [Count, setcount] = useState(0);
    
    return(
        <div>
        <h2>Count: {Count}</h2>
<button onClick={() => setcount(Count + 1)}>Increase</button>


        </div>
 );

}
export default Count;