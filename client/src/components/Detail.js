import React, { Component } from 'react'

const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

export default class Detail extends Component {
    state = {
        recipe: null
    }
    
    componentDidMount(){
        const { id } = this.props.match.params
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${RECIPE_API_KEY}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => 
            this.setState({ recipe: res })
        )
        .catch(err => { console.log(err)})
    }

    render() {
        const { recipe } = this.state
        return (
            <div>
                {!recipe 
                    ? <span>loading...</span>
                    : (
                        <div>
                            <h3>{recipe.title}</h3>
                            <img alt={recipe.title} src={recipe.image} width="100" height="100" />                    
                            <div>{recipe.instructions}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
