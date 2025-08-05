import { useState } from "react";

function Login1() {
  const [submit, setSubmit] = useState(false);
  const [password, setpassword] = useState("");
  const handleSubmit = () => {
    if (password == "1234") {
      setSubmit(true);
    } else {
      setSubmit(false);
      setpassword("");
    }
  };
  const handleChange = (event) => {
    setpassword(event.target.value);
  };
  return (
    <>
      {!submit ? (
        <div>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Click</button>
        </div>
      ) : (
        <div>
          <h1>You are logged in as {password}</h1>
        </div>
      )}
      
    </>
  );
}
export default Login1;
