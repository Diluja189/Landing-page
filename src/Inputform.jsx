import { useState } from "react";
import axios from "axios";

function Inputform() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [m_no, setMobile] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      id,
      email,
      m_no,
    };
    if(m_no.length !==10){
      alert("check the mobile number")
      return;

}
    axios.post("http://localhost:5000/post2", payload).then((res) => {
      console.log("submited", res.data);
    }).catch((error) => {
      console.log("diluja", error.response.data.diluja);
      const content= error.response.data.diluja;
      if(content.includes('Duplicate')) {
        alert("Duplicate found");
      }
    });
  };

  return (
    <>
      {/* <div className="container col-6">
        <div className="card" style={{width:"130px",height:"130px"}}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" value={name} onChange={handleName} />
          <br></br>
          <br />
          <label htmlFor="">Id</label>
          <input type="text" name="email" value={id} onChange={handleId} />
          <br />
          <button className="btn btn-info mt-2">Submit</button>
        </form>
        </div>
      </div> */}
      <br></br> <br></br>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={handleName} required/> <br></br> <br></br>
          <input type="text" placeholder="ID" value={id} onChange={handleId}/> <br></br> <br></br>
          <input type="text" placeholder="email"  value={email} onChange={handleEmail}/> <br></br> <br></br>
          <input type="text" placeholder="mobile number" value={m_no} onChange={handlePhone}/> <br></br>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Inputform;

