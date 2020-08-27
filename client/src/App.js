import React from "react";
import Search from "./components/search";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Routes from "./components/Routes";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 4,
    };
  }
  //logout button pressed
  userLoggedOut = () => {
    console.log("user logging out");
    localStorage.removeItem("token");
    this.setState({
      userId: null,
      userLoggedIn: 0,
    });
  };

  //comment
  render() {
    const { userLoggedIn } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <BrowserRouter>
            <div>
              <header className="row">
                <h1 className="col"> WHAT TO COOK</h1>
                <div className="col">
                  <Navbar />
                </div>
              </header>
            </div>
            <main className="row" id="mainbg">
              <Routes />
              <Switch />
              This is the area for the main content
            </main>
            <footer className="row">
              this the footer which doesnt exist in design but we probably
              should write somethings like:<br></br>
              <strong>
                Made with &hearts; by Iva Bozic, Julieta Martin, Irina Eliseeva
                as a collaboration project for Codeop bootcamp, FS-09{" "}
              </strong>
            </footer>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
