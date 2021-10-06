import React, { useEffect, useState } from 'react'
import './ItemList.css'

import Item from '../Item/Item'


const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setItems(json))
    }, []);

    return (
        <div className='item-list'>
            {items.map(item => {
                return(
                    <Item
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        rating={item.rating.rate}
                        price={item.price}
                        stock={item.id}
                    />
                );
            })}
        </div>
    )
}

export default ItemList
