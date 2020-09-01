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
                //put the information in one block with 8 options in the right)
            <div className="row">
            <div className="col-sm-6" id="options">
                {recipes.map(recipe => (
                    <RecipeSearchItem 
                    key={recipe.id} 
                    id={recipe.id} 
                    image={recipe.image} 
                    title={recipe.title} 
                    instrus/>
                    
                ))
            }
            </div>
            </div>
           
        )
    }
}
