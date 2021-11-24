import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

import './ItemList.css'

import Item from '../Item/Item'
import { Loader } from 'semantic-ui-react'


const ItemList = (props) => {

    /*const url = props.category ? `products/category/${props.category}` : `products?limit=20`;*/

    const [items, setItems] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {

        /*fetch(`https://fakestoreapi.com/${url}`)
            .then(res=>res.json())
            .then(json=> {
                setItems(json); 
                SetIsLoading(false);
            })
            */

        const requestData = async () => {
            const auxItems = [];
            const data = await getDocs(collection(db, 'products'));
            data.docs.forEach(doc => auxItems.push( { ...doc.data(), id: doc.id } ));

            if( props.category ) {
                setItems(auxItems.filter(x => x.category === props.category));
            } else {
                setItems(auxItems);
            }

            SetIsLoading(false);
            //console.log(items);
        }

        requestData();

    }, [props.category]);

    return (
        <div className='container'>
            <div className='item-list'>

                { isLoading ? 

                <Loader active content='Cargando productos...' />
                
                :  
                
                items.map(item => {
                    return(
                        <div key={item.id}>
                                <Item
                                    image={item.img}
                                    title={item.title}
                                    category={item.category}
                                    price={item.price}
                                    stock={item.stock}
                                    id={item.id}
                                    showCounter={false}
                                />
                        </div>
                    );
                })

                }

            </div>
        </div>
    )
}

export default ItemList
