import React from 'react'
import './Recipe.css'

export default function Recipe({name,image,calories}) {
    return (
        <div className="item col-lg-4">
            
            <img src={image} alt=""></img>
            <h3>Name:{name}</h3>
            <h3>Calories:{calories}</h3>
        </div>
    )
}
