import React from 'react'
import './Item.css'
import {Card, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

const Item = (props) => {


    const handleCart = (counter, itemName) => {
        if(counter !== 0) alert(`Se ha agregado ${counter} ${itemName} al carrito.`);
    }


    return (
        
            <Card>
                <Image src={props.image} wrapped ui={false} />
                <Card.Content>
                    <Link to={`/item/${props.id}`}>
                        <Card.Header>{props.title}</Card.Header>
                    </Link>
                    <Card.Meta>
                        <span className='date'>{props.category}</span>
                    </Card.Meta>

                </Card.Content>
                
                <Card.Content>
                    <strong>$ {props.price} </strong>
                </Card.Content>
                {props.showCounter ? 
                <Card.Content extra>
                    <ItemCount itemName={props.title} stock={props.stock} initial={1} onAdd={() => handleCart(props.id, props.title)}/>
                </Card.Content>
                : null }
            </Card>
    )
}

export default Item
