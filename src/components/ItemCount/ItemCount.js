import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if(counter < stock) setCounter(counter + 1);
    }

    const decrement = () => {
        if(counter > 0) setCounter(counter - 1);
    }

    const onAdd = () => {
        if(counter != 0) alert(`Se ha agregado ${counter} producto(s) al carrito.`);
    }

    return (
        <div className='counter-wrapper'>
            <div className='counter'>
                <Button icon onClick={decrement}>
                    <Icon name='minus' />
                </Button> 

                <h4 class='counter-num'>{counter}</h4>

                <Button icon onClick={increment}>
                    <Icon name='plus' />
                </Button> 
            </div>
            <Button icon onClick={onAdd}>
                Agregar al carrito <Icon name='add to cart' />
            </Button>
        </div>
    )
}

export default ItemCount
