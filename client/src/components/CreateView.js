import React, { Component } from "react";
import { withRouter } from "react-router";
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
  background: #31525b;
  border-radius: 4px;
  color: #fae6b1;
  border-color: #ffa101;
  width: 25%;
  height: 50px;
`
const Imagesignup = styled.img`
  box-shadow: 5px 5px 15px grey;
  margin-top: 40px;
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

class CreateView extends Component {
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
        this.props.history.push("/login" + this.props.location.search);
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
        <Div>
          <Column>
            <H1>
              Sign Up
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
                Register
              </Button>
                {userCreationError ? (
                  <p>A user with these credentials already exists</p>
                    ) : null}
                    {userCreated ? (
                      <p>New user created! Please log in</p>
                    ) : null}
            </form>  
          </Column>
          <Column>
            <Imagesignup
              src="/images/avocado.jpg"
              alt="avocado"
            />
          </Column>
        </Div>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateView);
