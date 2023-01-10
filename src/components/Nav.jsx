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
        <nav className="nav">
            <ul>
            <Link to='/' key="Home">
            <li>Home</li>
            </Link>
            {categories.map((category)=>{
                return (
                <Link to={`reviews?category=${category.slug}`} key={category.slug}>
                <li>{category.slug}</li>
                </Link>)
            })}
        </ul>
        </nav>
    )
}
