import { useRef } from "react";

function stopwatch(){
    const inputRef0=useRef(null);
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const handleClick = () => {
        alert(""); 
        const refArray=[inputRef0,inputRef1,inputRef2];

        for(let i of refArray){
            const xyz=i.current.value.trim();
            if(xyz===""){
                i.current.focus();
                return;
            }
        }
    };

    

return(
<>
<div>
<input Ref={inputRef0}placeholder="Enter your email" /><br></br>
<input Ref={inputRef1}placeholder="Enter your mobile number"/><br></br>
<input Ref={inputRef2}placeholder="Enter your password" type="password"/><br></br>

<button className="" onClick={handleClick}>
    click me 
</button>



</div>
</>
);



}
export default stopwatch;