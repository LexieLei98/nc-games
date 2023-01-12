import { useEffect } from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { getCategories } from "../api"
import { Error } from './Error'

export const Nav = () => {
    const [categories, setCategories] = useState([])
    const [error, setError ] = useState(false)

    useEffect(() =>{
        setError(false)
        getCategories()
        .then(({categories}) => {
            setCategories(categories)
        })
        .catch(() => {
            setError(true)
        })
    },[])

    if(error) return <Error/>
    
    return(
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
