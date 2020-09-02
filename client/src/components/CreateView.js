import React, { Component } from "react";
import "./CreateView.css";

export default class CreateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: "",
        password: "",
      },
      userCreated: 0,
      userCreationError: 0,
    };
  }
  handleInputChange = (e) => {
    let newUser = this.state.newUser;
    newUser[e.target.name] = e.target.value;
    this.setState({
      newUser,
    });
  };

  handleSubmit = (e) => {
    const { newUser } = this.state;
    e.preventDefault();
    console.log("form submitted");
    this.storeUser(newUser);
  };

  storeUser = async (newUser) => {
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const json = await response.json();
      console.log(json);
      if (json.msg === "ok") {
        this.setState({
          userCreated: 1,
          userCreationError: 0,
        });
      } else {
        this.setState({ userCreationError: 1, userCreated: 0 });
      }
    } catch (err) {
      console.log("user creation error", err);
    }
  };

  render() {
    const { username, password } = this.state.newUser;
    const { userCreationError, userCreated } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-items-center">
            <div className="box w-100">
              <h1 className="mb-4" id="titleSignup">
                Sign Up
              </h1>
              <div className="row justify-content-center">
                <div className="col col-xl-6 col-lg-8 col-md-10 col-sm-10 col-8">
                  <form
                    onSubmit={this.handleSubmit}
                    className="form"
                    id="form-signup"
                  >
                    <input
                      type="text"
                      name="username"
                      value={username}
                      placeholder="Username..."
                      onChange={this.handleInputChange}
                      required
                      pattern="[A-Za-z0-9]{2,}"
                      className="form-control form-control-lg mb-4 custom-input-placeholder"
                    ></input>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password..."
                      onChange={this.handleInputChange}
                      required
                      className="form-control form-control-lg mb-4 custom-input-placeholder"
                    ></input>
                    <button
                      type="sumbit"
                      className="form-control-lg"
                      id="buttonCreate"
                    >
                      Register
                    </button>
                    {userCreationError ? (
                      <p>A user with these credentials already exists</p>
                    ) : null}
                    {userCreated ? (
                      <p>New user created! Please log in</p>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="f1_container">
            <img
              src="/images/avocado.jpg"
              alt="avocado"
              className="rounded-lg img-fluid flip-box-back"
              id="imagesignup"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
