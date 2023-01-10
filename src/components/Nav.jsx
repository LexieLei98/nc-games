import { useEffect } from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { getCategories } from "../api"

export const Nav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        getCategories().then(({categories}) => {
            setCategories(categories)
        });
    },[])

    return (
        <nav className="Nav">
            {categories.map((category)=>{
                return (<nav>
                <Link to={`reviews?category=${category.slug}`}
                className="Category_Nav"
                key={category.slug}>
                {category.slug}
                </Link>
                <span></span>
                </nav>)
            })}

        </nav>
    )
}
