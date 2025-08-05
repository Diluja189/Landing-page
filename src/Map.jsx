import axios from "axios";
import { useEffect,useState } from "react";

function Map(){
    const [user,setUser]=useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:5000/data")
        .then((response) =>{
            setUser(response.data);
        })
        .catch((err) =>{
            console.error("Fetching error",err)
        });
    },[]);
    console.log(user);

  return (
    <>
      
      <div>
        <h1>Data base's details</h1>
        <ul>
          {user.map((xyz) => (
            <li key={xyz.id}>{xyz.name}</li>
          ))}
        </ul>
      </div>

      <div>
          <table>
            <tr>
          <th>Name</th>
           <th>Email</th>
            <th>Mobile number</th>
            
       </tr>
          {user.map((bio) => (
            <tr key={bio.id}>
              <td>{bio.name}</td>
              <td>{bio.email}</td>
              <td>{bio.m_no}</td>
              
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Map;


