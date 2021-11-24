import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(parseInt(initial));


    const increment = () => {
        if(counter < stock) {setCounter(counter + 1)};
    }

    const decrement = () => {
        if(counter > initial) setCounter(counter - 1);
    }

    return (
        <div className='counter-wrapper'>
            <div className='counter'>
                <Button icon onClick={decrement}>
                    <Icon name='minus' />
                </Button> 

                <h4 className='counter-num'>{counter}</h4>

                <Button icon onClick={increment}>
                    <Icon name='plus' />
                </Button> 
            </div>
            <div className='counter-add'>
                <Button icon onClick={() => onAdd(counter)}> Agregar al carrito <Icon name='add to cart' /> </Button>
            </div>
        </div>
    )
}

export default ItemCount
