import React, {useContext} from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Cart.css'

//Context
import { CartContext } from '../contexts/CartContext';



const Cart = () => {

    const [items, removeItem, clearCart] = useContext(CartContext);

     const getTotalPrice = () => {
        let total = 0;
        items.forEach(item => {
            total += parseFloat(item.price) * item.quantity;
        })
        return total;
    }

    return (
        <div className='cart-wrapper'>
            <div className='items'>
            <Item.Group>
                {
                    items.length > 0 ? 
                    items.map(item => {
                        return(
                                <Item  className='item-horizontal' key={item.id}>
                                    <Item.Image size='tiny' src={item.image} />

                                    <Item.Content>
                                        <Item.Header>{item.title}</Item.Header>
                                        <Item.Meta>
                                        <span className='price'>$ {item.price}</span>
                                        <span className='stay'>x {item.quantity}</span>
                                        </Item.Meta>
                                        <Item.Description><strong>$ {parseFloat(item.price) * parseInt(item.quantity)}</strong></Item.Description>
                                        <br></br>
                                        <Button icon onClick={() => removeItem(item.id)}> Eliminar <Icon name='trash' /> </Button>
                                    </Item.Content>
                                </Item>
                        )
                    }) : null
                }
            </Item.Group>
            </div>
            
            { items.length > 0 ?
                <div className='total-price'>
                    Total: <strong>$ {getTotalPrice()}</strong>
                </div>
            : 
                <div>
                    <h2> Carrito Vacio! </h2>
                    <Link to='/'>
                        <Button > Seguir comprando </Button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Cart
