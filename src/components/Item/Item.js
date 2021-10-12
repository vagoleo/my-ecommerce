import React from 'react'
import './Item.css'
import {Card, Icon, Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";

import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

const Item = (props) => {
    return (
        <Link to='/item/:id'>
            <Card>
                <Image src={props.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.category}</span>
                    </Card.Meta>
                    <Card.Description> 
                        <Icon name='star' /> {props.rating} 
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <strong>$ {props.price} </strong>
                </Card.Content>
                <Card.Content extra>
                    <ItemCount itemName={props.title} stock={props.stock} initial={1}/>
                </Card.Content>
            </Card>
        </Link>
    )
}

export default Item
