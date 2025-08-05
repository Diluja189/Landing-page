import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Inputform2() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [m_no, setMobile] = useState("");
  const [modaldata, setModaldata] = useState({
    name: "",
    id: "",
    email: "",
    m_no: "",
  });

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

    if (m_no.length !== 10) {
      alert("Check the mobile number");
      return;
    }

    axios
      .post("http://localhost:5000/post3", payload)
      .then((res) => {
        console.log("submitted", res.data);
        update();
       
        setName("");
        setId("");
        setEmail("");
        setMobile("");
      })
      .catch((error) => {
        console.log("diluja", error.response.data.diluja);
        const content = error.response.data.diluja;
        if (content.includes("Duplicate")) {
          alert("Duplicate found");
        }
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure want to delete?")) return;

    let url = `http://localhost:5000/delete/${id}`;
    axios.delete(url).then((res) => {
      alert("Deleted successfully");
      update();
    });
  };

  const handleEdit = (edata) => {
    setModaldata(edata);
  };

  
  const handleUpdate = () => {
   
    axios
      .put(`http://localhost:5000/update/${modaldata.id}`, modaldata)
      .then((res) => {
        alert("Updated successfully");
        update();
       
        const modalElement = document.getElementById("exampleModal");
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        modal.hide();
      })
      .catch((err) => {
        alert("Update failed");
        console.error(err);
      });
  };

  const [user, setUser] = useState([]);

  const update = () => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Fetching error", err);
      });
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      <br /> <br />
      <div className="row">
        <div className="col-4">
          <h2>Input form</h2>

          <div className="container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleName}
                required
              />
              <br /> <br />
              <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={handleId}
              />
              <br /> <br />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <br /> <br />
              <input
                type="text"
                placeholder="Mobile number"
                value={m_no}
                onChange={handlePhone}
              />
              <br />
              <br />
              <button>Submit</button>
            </form>
          </div>
        </div>

        <div className="col-8">
          <h1 className="bg-info text-white mt-3">Database's details</h1>
          <ul>
            <th>
              {user.map((xyz) => (
                <li key={xyz.id}>{xyz.name}</li>
              ))}
            </th>
          </ul>

          <div>
            <table className="table table-border table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile number</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {user.map((bio) => (
                  <tr key={bio.id}>
                    <td>{bio.name}</td>
                    <td>{bio.email}</td>
                    <td>{bio.m_no}</td>
                    <td>
                      <button
                        className="text-light bg-danger"
                        onClick={() => handleDelete(bio.id)}
                      >
                        DELETE
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-light bg-success"
                        onClick={() => handleEdit(bio)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        EDIT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit User Data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="modal-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modal-name"
                    value={modaldata.name}
                    onChange={(e) =>
                      setModaldata({ ...modaldata, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="modal-email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modal-email"
                    value={modaldata.email}
                    onChange={(e) =>
                      setModaldata({ ...modaldata, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="modal-mobile" className="col-form-label">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modal-mobile"
                    value={modaldata.m_no}
                    onChange={(e) =>
                      setModaldata({ ...modaldata, m_no: e.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputform2;
