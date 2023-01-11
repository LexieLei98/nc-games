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

    useEffect(()=>{
        setIsloading(true)
        getReviews(categoryQuery).then((data) => {
            setReviews(data)
            setIsloading(false)
        })
    }, [categoryQuery])

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
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
        </div>
    )
}