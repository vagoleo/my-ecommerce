import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

import './ItemDetailContainer.css'
import { Loader } from 'semantic-ui-react'

const ItemDetailContainer = ({match}) => {

    let itemID = match.params.id;

    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        /*fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> { 
                setItem(json);
                setIsLoading(false);
            })*/

            const requestData = async () => {
                const data = await getDocs( collection(db, 'products') );
                const auxItem = {...data.docs.find(x => x.id === itemID).data(), id: itemID };
                
                setItem(auxItem);
                setIsLoading(false);
                //console.log(items);
            }
    
            requestData();

    }, [itemID]);

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
