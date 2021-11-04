import React, { useContext } from 'react';
import './CartWidget.css';
import { Icon } from 'semantic-ui-react';

//context
import { CartContext } from '../../contexts/CartContext';


const CartWidget = () => {

    
    const [items] = useContext(CartContext);

    const getQuantity = () => {
        let aux = 0;
        if( items.length > 0 ) {
            items.forEach( item => {
                aux += item.quantity;
            })
        }
        return aux;
    }

    let qty = getQuantity();
    

    return (
        <div className='cart-widget'>
            <Icon size='large' name='shopping cart' />
            { qty > 0 ? <span className='quantity'>{qty}</span> : null }
        </div>
    )
}

export default CartWidget
