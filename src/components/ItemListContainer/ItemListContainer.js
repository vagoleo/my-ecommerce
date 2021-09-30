import React from 'react'
import './ItemListContainer.css';


const ItemListContainer = (props) => {
    return (
        <div class='item-list-container' style={{marginTop: '20vh', textAlign: 'center'}}>
            <h1> {props.greeting} </h1>
        </div>
    )
}

export default ItemListContainer
