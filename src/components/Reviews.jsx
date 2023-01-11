import { useEffect } from "react"
import { useState } from "react"
import { getReviews } from "../api"
import ReviewCard from "./ReviewCard"
import { useSearchParams } from "react-router-dom"

export const Reviews = () => {
    const [isLoading, setIsloading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams();
    const [reviews, setReviews] = useState([])
    const categoryQuery = searchParams.get('category')
    const [sortBy, setSortBy] = useState('title')
    const [order, setOrder] = useState('ASC')
    
    useEffect(()=>{
        setIsloading(true)
        getReviews(categoryQuery, sortBy,order).then((data) => {
            setReviews(data)
            setIsloading(false)
        })
    }, [categoryQuery, sortBy, order])

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <main>
        <section>
            <label htmlFor="selectTab" >You can sort by:  
            <select value={sortBy}
            key='selectTab' 
            onChange={(e) => setSortBy(e.target.value)}>
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
            <label htmlFor="orderTab" >You can sort by:  
            <select value={order}
            key='orderTab' 
            onChange={(e) => setOrder(e.target.value)}>
            <option value='ASC'>A-Z</option>
            <option value='DESC'>Z-A</option>
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
            category={review.category}
            />)
        })}
        </section>
        </main>
    )
}