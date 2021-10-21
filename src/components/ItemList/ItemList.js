import React, { useEffect, useState } from 'react'

import './ItemList.css'

import Item from '../Item/Item'



const ItemList = (props) => {

    const url = props.category ? `products/category/${props.category}` : `products?limit=20`;

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/${url}`)
            .then(res=>res.json())
            .then(json=>setItems(json))
    }, [url]);

    return (
        <div className='item-list'>
            {items.map(item => {
                return(
                    <div key={item.id}>
                        
                            <Item
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                rating={item.rating.rate}
                                price={item.price}
                                stock={item.id}
                                id={item.id}
                            />
                        
                    </div>
                );
            })}
        </div>
    )
}

export default ItemList
