import React, {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'semantic-ui-react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';

const ItemDetail = ({id}) => {

    const [item, setItem] = useState([]);
    const [itemsAdded, setItemsAdded] = useState(0);
    const [didAdd, setDidAdd] = useState(false);

    const onAdd = (counter) => {
        if(counter !== 0){
            setItemsAdded(counter);
            setDidAdd(true);
            console.log('did add:', didAdd);
            console.log('items added:', itemsAdded);
        }
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> { setItem(json)})
    }, [id]);

    return (
        <div className='item-detail'>
            <div className='col col-left'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='col col-right'>
                <h2>{item.title}</h2>
                <p className='item-desc'> {item.description}</p>
                <h3>$ {item.price}</h3>
                { itemsAdded ? 
                    <Link to='/cart'>
                        <Button>Finalizar Compra</Button>
                    </Link>
                    :
                    <ItemCount itemName={item.title} stock={item.id} initial={0} onAdd={onAdd} />
                }
                
            </div>
            
        </div>
    )
}

export default ItemDetail
