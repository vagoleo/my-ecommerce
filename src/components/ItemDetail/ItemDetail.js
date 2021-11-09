import React, {useState, useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../contexts/CartContext';


const ItemDetail = ({item}) => {
    
    const [itemsAdded, setItemsAdded] = useState();
    const [didAdd, setDidAdd] = useState(false);

    const onAdd = (quantity) => {
        setItemsAdded(quantity);
        setDidAdd(true);
    }

    const [items, setItems, addItem, removeItem, clearCart] = useContext(CartContext);

    

    return (
        <div className='item-detail'>
            <div className='col col-left'>
                <img src={item.img} alt={item.title} />
            </div>
            <div className='col col-right'>
                <h2>{item.title}</h2>
                <p className='item-desc'> {item.description}</p>
                <h3>$ {item.price}</h3>
                { didAdd ? 
                    <Link to='/cart'>
                        <Button onClick={() => addItem(item, itemsAdded)}>Finalizar Compra</Button>
                    </Link>
                    :
                    <ItemCount itemName={item.title} stock={item.stock} initial={0} onAdd={(quantity) => onAdd(quantity)} />
                }
                
            </div>

          
            
        </div>
    )
}

export default ItemDetail
