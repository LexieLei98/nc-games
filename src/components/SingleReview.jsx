import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { getSingleReview } from "../api"

export const SingleReview = ()=> {
    const [isLoading, setIsloading] = useState(true)
    const [review, setReview] = useState([])
    const {review_id} = useParams()

    useEffect(()=>{
        setIsloading(true)
        getSingleReview(review_id).then((data) => {
            setReview(data)
            setIsloading(false)
        })
    }, [])

    if(isLoading) {
        return <p>Loading...</p>
    }

    return(
        <>
        <br />
        <section id="SingleReview">
            <h3><strong>{review.title}</strong></h3>
            <p>Created at: {review.created_at}</p>
            <p>{review.review_body}</p>
            <img src={review.review_img_url} alt ={`a pic of ${review.title}`} className="ReviewImg"/>
            <p>Owner: {review.owner}</p>
            <p>Designed by: {review.designer}</p>
            <p>Category: {review.category}</p>
            <p>Votes:{review.votes}</p>
            <button>👍</button>
            <button>👎</button>
            <button>Delete</button>
        </section>
        </>
    )
}