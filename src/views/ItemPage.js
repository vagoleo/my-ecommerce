import React from 'react'

import ItemDetail from '../components/ItemDetail/ItemDetail'

const ItemPage = ({match}) => {

    let itemId = match.params.id;

    return (
        <div>
            <ItemDetail id={itemId} />
        </div>
    )
}

export default ItemPage
