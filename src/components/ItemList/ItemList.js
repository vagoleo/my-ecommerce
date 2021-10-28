import React, { useEffect, useState } from 'react'

import './ItemList.css'

import Item from '../Item/Item'
import { Loader } from 'semantic-ui-react'


const ItemList = (props) => {

    const url = props.category ? `products/category/${props.category}` : `products?limit=20`;

    const [items, setItems] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/${url}`)
            .then(res=>res.json())
            .then(json=> {
                setItems(json); 
                SetIsLoading(false);
            })
    }, [url]);

    return (
        <div className='item-list'>

            { isLoading ? 

             <Loader active content='Cargando productos...' />
            
            :  
            
            items.map(item => {
                return(
                    <div key={item.id}>
                            <Item
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                rating={item.rating.rate}
                                price={item.price}
                                stock={10}
                                id={item.id}
                                showCounter={false}
                            />
                    </div>
                );
            })

            }

        </div>
    )
}

export default ItemList
