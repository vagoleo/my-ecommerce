import React, { useContext } from 'react';
import './CartWidget.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../../contexts/CartContext';


const CartWidget = () => {

    
    const [items, , , , ] = useContext(CartContext);

    const getQuantity = () => {
        let aux = 0;

        if( items.length !== 0 ) {
            items.forEach( item => {
                aux += item.quantity;
            })
        }
        
        return aux;
    }

    let qty = getQuantity();
    

    return (
        <div className='cart-widget'>
            <Link to={`/cart`}>
                <Icon size='large' name='shopping cart' />
                { qty > 0 ? <span className='quantity'>{qty}</span> : null }
            </Link>
        </div>
    )
}

export default CartWidget
