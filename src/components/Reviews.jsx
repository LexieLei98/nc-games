import { useEffect } from "react"
import { useState } from "react"
import { getReviews } from "../api"
import ReviewCard from "./ReviewCard"

export const Reviews = () => {
    const [isLoading, setIsloading] = useState(true)
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        setIsloading(true)
        getReviews().then((data) => {
            setReviews(data)
            setIsloading(false)
        })
    }, [])

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