import React, { useEffect, useState } from 'react'

import './ItemList.css'

import Item from '../Item/Item'
import { Link } from 'react-router-dom';


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
                    <div key={item.id}>
                        <Link to={`/item/${item.id}`}>
                            <Item
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                rating={item.rating.rate}
                                price={item.price}
                                stock={item.id}
                            />
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemList
