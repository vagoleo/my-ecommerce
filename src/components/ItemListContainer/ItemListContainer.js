import React from 'react'
import './ItemListContainer.css';

// Components
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) => {
    
    return (
        <div className='item-list-container' style={{marginTop: '20vh', textAlign: 'center'}}>
            <h1> {props.greeting} </h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
