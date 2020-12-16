import React, { Component } from "react";
import { withRouter } from "react-router";
import queryString from "query-string";
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  height: 100%;
`
const Column = styled.div`
  flex-basis: 50%;
  flex: 1;
  align-self: center;
  text-align: center;
`
const Button = styled.button`
  background: #ffa101;
  border-radius: 4px;
  color: #31525b;
  border-color: #ffa101;
  width: 25%;
  height: 50px;
`
const Imagesignup = styled.img`
  box-shadow: 5px 5px 15px grey;
  margin-top: 30px;
  transform-style: preserve-3d;
  transition: all 1s linear;
  width: 500px;
  &:hover {
    transform: rotateY(180deg);
  }
`
const Input = styled.input`
  display: block;
  color: #849aa0;
  border-radius: 8px;
  border: #fae6b1;
  background: #fae6b1;
  margin-bottom: 20px; 
  width: 50%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  ::placeholder {
    color: #849aa0;
    text-align: center;
  }
`
const H1 = styled.h1`
  color: #ffa101;
  text-shadow: 0px 4px 4px #fae6b1;
  margin-bottom: 20px;
`

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existingUser: {
        username: "",
        password: "",
      },
      userLoggedIn: 0,
      userLoginError: 0,
      errorMessage: "Incorrect login",
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

        //redirect to recipe if user was there before
        if (this.props.location.search) {
          const values = queryString.parse(this.props.location.search);
          this.props.history.push(values.returnUrl);
        } else {
          //redirect to home on successfull login if user wasn't on recipe
          this.props.history.push(`/`);
        }
        //reload page to get user version of home screen with different nav
        window.location.reload(false);
      } else {
        this.setState({ userLoginError: 1, userLoggedIn: 0 });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { username, password } = this.state.existingUser;
    const { userLoginError, errorMessage } = this.state;
    return (
      <React.Fragment>
        <Div>
          <Column>
            <H1>
              Log In
            </H1>
            <form
              onSubmit={this.handleSubmit}
              >
              <Input
                type="text"
                name="username"
                value={username}
                placeholder="Username..."
                onChange={this.handleInputChange}
                required
                pattern="[A-Za-z0-9]{2,}"
              ></Input>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="Password..."
                onChange={this.handleInputChange}
                required
              ></Input>
              <Button type="sumbit">
                Submit
              </Button>
                  {userLoginError ? <p>{errorMessage}</p> : null}
            </form>
          </Column>
          <Column>
            <Imagesignup
              src="/images/pizza.jpg"
              alt="pizza"
            />
          </Column>
        </Div>
      </React.Fragment>
    );
  }
}

export default withRouter(LoginView);
