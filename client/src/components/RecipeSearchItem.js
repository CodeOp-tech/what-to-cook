import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class RecipeSearchItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { title, image } = this.props;
        return (
            <div>
               <NavLink to="/recipe">
                    <h3>{title}</h3>
                    <img alt={title} src={image} />
               </NavLink>
            </div>
        )
    }
}
