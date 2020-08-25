import React, { Component } from 'react'
import Patata from "./Detailrecipe";

const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: props.match.params.id
        }
    }

    componentDidMount(){
        const { id } = this.state
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
                    : <Detailrecipe recipe={recipe} />
                }
            </div>
        )
    }
}
