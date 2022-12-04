import React from "react";

function App() {
  return (
    <div className="p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Learn react function</div>
              <div className="card-body">
                <form>
                  <div className="mb-2">
                    <label htmlFor="firstname" className="form-label">
                      Firstname
                    </label>
                    <input type="text" className="form-control" name="firstname" id="firstname" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="form-label">
                      Lastname
                    </label>
                    <input type="text" className="form-control" name="lastname" id="lastname" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer">My name is ...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
