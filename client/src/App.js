import React from "react";

import Search from "./components/search";
import { BrowserRouter, Switch } from "react-router-dom";

import Navbar from "./components/NavBar";
import Routes from "./components/Routes";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <h1 className="fixed-top"> WHAT TO COOK</h1>
            <BrowserRouter>
              <Navbar />

              <Search />

              <Routes />
              <Switch />
            </BrowserRouter>
          </nav>
        </header>
        <main className="container m-5 p-5">
          This is the area for the main content
        </main>
        <footer>
          this the footer which doesnt exist in design but we probably should
          write somethings like:<br></br>
          <bold>
            Made with &hearts; by Iva Bozic, Julieta Martin, Irina Eliseeva as a
            collaboration project for Codeop bootcamp, FS-09{" "}
          </bold>
        </footer>
      </div>
    );
  }
}
export default App;
