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
        <div id="f1_container">
          <div id="f1_card" >
            <div className="col-sm-6">
              <img src="/images/avocado.jpg" alt="avocado" width="500" className="rounded-lg mx-auto d-block flip-box-back" id="imagesignup"/>
            </div>
          </div>
        </div>

        <div className="col-sm-6 text-center d-flex justify-content-center align-items-center">
          <div className="box">
              <h1 className="mb-4" id="titleSignup">Sign Up</h1>
              <form onSubmit={this.handleSubmit} className="inputs d-inline-block text-center" id="form-signup">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your name..."
                  onChange={this.handleInputChange}
                  required
                  pattern="[A-Za-z0-9]{2,}"
                  className="form-control-lg mb-4"
                ></input>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your email addres..."
                  onChange={this.handleInputChange}
                  required
                  className="form-control-lg mb-4"
                ></input>
                <button type="sumbit" className="form-control-lg" id="buttonCreate">Register</button>
              </form>
            </div>
        </div>
              {userCreationError ? (
                <strong>A user with these credentials already exists</strong>
              ) : null}
              {userCreated ? <strong>New user created!</strong> : null}
      </React.Fragment>
    );
  }
}
