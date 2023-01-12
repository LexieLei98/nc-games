import { useEffect } from "react"
import { useState } from "react"
import { getReviews } from "../api"
import ReviewCard from "./ReviewCard"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { Error } from './Error'

export const Reviews = () => {
    const [isLoading, setIsloading] = useState(true)
    const [error, setError ] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [reviews, setReviews] = useState([])
    const categoryQuery = searchParams.get('category')
    const [sortBy, setSortBy] = useState('title')
    const [order, setOrder] = useState('ASC')
    const navigate = useNavigate()


    useEffect(()=>{
        setIsloading(true)
        setError(false)
        let reviewString = '/reviews'
        if(sortBy) {
            reviewString += `?sort_by=${sortBy}`
            if(order) reviewString += `&&order=${order}`
            if(categoryQuery) reviewString += `&&category=${categoryQuery}` 
        }

        getReviews(categoryQuery, sortBy,order).then((data) => {
            setReviews(data)
            navigate(reviewString)
            setIsloading(false)
        })
        .catch(()=> {
            setError(true)
        })
    }, [categoryQuery, sortBy, order])

    if(error) return <Error/>
    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <main>
        <section>
            <label htmlFor="selectTab" >You can sort by: 
            <select value={sortBy}
            key='selectTab' 
            onChange={(e) => {setSortBy(e.target.value)}}>
            <option value='title'>Title</option>
            <option value='category'>Category</option>
            <option value='designer'>Designer</option>
            <option value='owner'>Owner</option>
            <option value='created_at'>Time</option>
            <option value='votes'>Votes</option>
            <option value='comment_count'>Comments</option>
            </select>
            </label>
        </section>
        <section>
            <label htmlFor="orderTab" > order by :
            <select value={order}
            key='orderTab' 
            onChange={(e) => setOrder(e.target.value)}>
            <option value='ASC'>Ascending </option>
            <option value='DESC'>Descending</option>
            </select>  
            </label>
        </section>
        <section>
        {reviews.map((review) => {
            return (<ReviewCard
            className="ReviewCard"
            key={review.review_id}
            review={review}
            title={review.title}
            review_body={review.review_body}
            review_img_url={review.review_img_url}
            votes={review.votes}
            review_id={review.review_id}
            owner={review.owner}
            designer={review.designer}
            category={review.category}
            created_at={review.created_at}
            comment_count = {review.comment_count}
            />)
        })}
        </section>
        </main>
    )
}