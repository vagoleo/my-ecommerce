import React from 'react'

import ItemList from '../components/ItemList/ItemList';

const CategoryPage = ({match}) => {

    let category = match.params.id;

    return (
        <div className='item-list-container' style={{marginTop: '20vh', textAlign: 'center'}}>
            <h1> {category} </h1>
            <ItemList category={category} />
        </div>
    )
}

export default CategoryPage
