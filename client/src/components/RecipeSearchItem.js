import React, { Component } from 'react'

export default class RecipeSearchItem extends Component {
    render() {
        const { title, image } = this.props;
        return (
            <div>
               
                <h3>{title}</h3>
                <img alt={title} src={image} />
            
            </div>
        )
    }
}
