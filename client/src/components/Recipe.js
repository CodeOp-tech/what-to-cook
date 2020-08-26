import React, { Component } from 'react'
import RecipeSearchItem from "./RecipeSearchItem";

export default class Recipe extends Component {
    constructor(props){
        super(props);
        this.state ={
            recipes:[]

        }
    }

    componentDidMount() {
        this.setState(
            {
                recipes: this.props.location.state.recipes
            })
    }

    render() {
        const { recipes } = this.state
         return (

            <div>
                {recipes.map(recipe => (
                    <RecipeSearchItem key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title}/>
                ))
            }
            </div>
            
        )
    }
}
