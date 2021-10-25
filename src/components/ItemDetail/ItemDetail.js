import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'semantic-ui-react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
    
    const [itemsAdded, setItemsAdded] = useState();
    const [didAdd, setDidAdd] = useState(false);

    const onAdd = (quantity) => {
        setItemsAdded(quantity);
        setDidAdd(true);
    }

    

    return (
        <div className='item-detail'>
            <div className='col col-left'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='col col-right'>
                <h2>{item.title}</h2>
                <p className='item-desc'> {item.description}</p>
                <h3>$ {item.price}</h3>
                { didAdd ? 
                    <Link to='/cart'>
                        <Button>Finalizar Compra</Button>
                    </Link>
                    :
                    <ItemCount itemName={item.title} stock={item.id} initial={0} onAdd={(quantity) => onAdd(quantity)} />
                }
                
            </div>
            
        </div>
    )
}

export default ItemDetail
