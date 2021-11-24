import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const CategoriesList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        /*fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))*/

        setCategories(['Men', 'Women'])
    }, []);

    return (
        <ul>
            {categories.map((ctg, idx) => {
                return(
                    <li key={idx}>
                        <Link to={`/category/${encodeURIComponent(ctg.toLocaleLowerCase())}`}>
                            <h4>{ctg}</h4>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default CategoriesList
