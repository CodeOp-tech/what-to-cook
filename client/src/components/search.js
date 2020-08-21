import React, { Component } from "react";


// const RECIPE_API_KEY = process.env.RECIPE_API_KEY;

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"",
            // apiResponse: []
         }
        }

          handleInput = (event) => {
            this.setState({
              text: event.target.value,
            });
          }

        //   componentDidMount() {
        //     fetch(``)
        //       .then(data => data.json)
        //       .then(apiResponse => this.setState({ apiResponse }))
        //   }

    render() {
        const { text } = this.state;
        return (
            <div className="col input-group-lg">
                   WHAT TO COOK..
                    <input
                      type="text"
                      value={text}
                      onChange={this.handleInput}
                      className="form-control mb-1"
                      maxLength="50"
                      placeholder="Find a recipe by adding 3 ingredients.."
                    ></input>
                    
                    <button 
                    class="btn btn-outline-secondary" 
                    type="submit" 
                    id="button-addon2">
                        search
                    </button>  
            </div>
        )
    }

