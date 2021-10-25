import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { Loader } from 'semantic-ui-react'

const ItemDetailContainer = ({match}) => {

    let id = match.params.id;

    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> { 
                setItem(json);
                setIsLoading(false);
            })
    }, [id]);

    return (
        <>
            { isLoading ?
                <Loader active />
            :
                <ItemDetail item={item} />
            }
            
        </>
    )
}

export default ItemDetailContainer
