import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const CategoriesList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }, []);

    return (
        <ul>
            {categories.map((ctg, idx) => {
                return(
                    <li key={idx}>
                        <Link to={`/category/${encodeURIComponent(ctg)}`}>
                            {ctg}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default CategoriesList
