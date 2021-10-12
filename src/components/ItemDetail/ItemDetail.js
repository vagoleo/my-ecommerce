import React, {useState, useEffect} from 'react'
import './ItemDetail.css'

const ItemDetail = ({id}) => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> {console.log(json); setItem(json)})
    }, [id]);

    return (
        <div className='item-detail'>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p className='item-desc'> {item.description}</p>
            <h3>$ {item.price}</h3>
        </div>
    )
}

export default ItemDetail
