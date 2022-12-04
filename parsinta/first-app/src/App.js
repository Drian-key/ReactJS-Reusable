import React, { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setName(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">Learn react function</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-2">
                    <label htmlFor="firstname" className="form-label">
                      Firstname
                    </label>
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="form-control" name="firstname" id="firstname" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="form-label">
                      Lastname
                    </label>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="form-control" name="lastname" id="lastname" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer">My name is {name ? name : "..."}</div>
            </div>
          </div>
          <div className="col-md-6">tes</div>
        </div>
      </div>
    </div>
  );
}

export default App;
