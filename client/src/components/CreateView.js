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
         <div className="col-sm-6">
            <img src="/images/avocado.jpg" alt="avocado" width="" className="" />
          </div>

        <div className="col-sm-6">
          <div className="col-sm-6">
          <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit} className="inputs">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your name..."
                  onChange={this.handleInputChange}
                  required
                  pattern="[A-Za-z0-9]{2,}"
                ></input>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your email addres..."
                  onChange={this.handleInputChange}
                  required
                ></input>
                <button type="sumbit">Register</button>
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
