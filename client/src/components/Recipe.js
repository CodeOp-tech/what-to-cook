import React, { Component } from 'react'
import RecipeSearchItem from "./RecipeSearchItem";

export default class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes:[]
        }
    }

    componentDidMount() {
        this.setState(
            { recipes: this.props.location.state.recipes }
            )}

    render() {
        const { recipes, recipe } = this.state
         return (
            <div className="row mt-4 ml-4 mr-4 mb-4">
             {recipes.map(recipe => (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <RecipeSearchItem 
                    key={recipe.id} 
                    id={recipe.id} 
                    image={recipe.image} 
                    title={recipe.title} 
                    className="mb-4"
                    instrus
                />
                  </div>  
                ))}
            </div>
        );
    }
}
