import React, { Component } from "react";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existingUser: {
        username: "",
        password: "",
      },
      userLoggedIn: 0,
      userLoginError: 0,
      errorMessage: "",
    };
  }
  handleInputChange = (e) => {
    let existingUser = this.state.existingUser;
    existingUser[e.target.name] = e.target.value;
    this.setState({
      existingUser,
    });
  };

  handleSubmit = (e) => {
    const { existingUser } = this.state;
    e.preventDefault();
    this.storeUser(existingUser);
  };

  storeUser = async (existingUser) => {
    //this.errorMessage = "";
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(existingUser),
      });
      const json = await response.json();
      console.log(json);
      if (json.msg === "User OK") {
        this.setState({
          userLoggedIn: 1,
          userLoginError: 0,
        });
        let token = json.token;
        console.log(token);
        localStorage.setItem("token", token);
      } else {
        this.setState({ userLoginError: 1, userLoggedIn: 0 });
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.props.isUserLoggedIn();
    }
  };

  render() {
    const { username, password } = this.state.existingUser;
    const { userLoginError, userLoggedIn } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={this.handleInputChange}
            required
            pattern="[A-Za-z0-9]{2,}"
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleInputChange}
            required
          ></input>
          <button type="sumbit">Submit</button>
        </form>
      </div>
    );
  }
}
