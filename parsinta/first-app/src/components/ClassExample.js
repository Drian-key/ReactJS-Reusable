import React, { Component } from "react";

class ClassExample extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      name: "",
      username: "",
      password: "",
      user_pw: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeHandlerSaya = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.setState({
      name: `tes ${this.state.firstname} ${this.state.lastname}`,
    });

    this.state.firstname = "";
    this.state.lastname = "";
  };

  submitHandlerSaya = (e) => {
    e.preventDefault();

    if (this.state.username === "drian" && this.state.password === "123") {
      this.setState({
        user_pw: `Berhasil Login`,
      });
    } else {
      this.setState({
        user_pw: `Gagal Login`,
      });
    }

    this.state.username = "";
    this.state.password = "";
  };

  render() {
    const { name, user_pw } = this.state;
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">Learn React JS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                        firstname
                      </label>
                      <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" id="firstname" className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        lastname
                      </label>
                      <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" id="lastname" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Show
                    </button>
                  </form>
                </div>
                <div className="card-footer">My name is {name ? name : "...."}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Bikinan aku</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandlerSaya}>
                    <div className="mb-4">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input type="text" name="username" id="username" className="form-control" value={this.state.username} onChange={this.changeHandlerSaya} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={this.changeHandlerSaya} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Kirim
                    </button>
                  </form>
                </div>
                <div className="card-footer">{user_pw ? user_pw : "Silahkan login ..."}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassExample;
