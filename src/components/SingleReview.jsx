import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { getSingleReview, patchVotes } from "../api"
import { Comments } from "./Comments"
import { CommentPoster } from "./PostComment"
import { Error } from './Error'

export const SingleReview = ()=> {
    const [isLoading, setIsloading] = useState(true)
    const [review, setReview] = useState([])
    const [comments, setComments] = useState([])
    const [voteChange, setVoteChange] = useState(0)
    const {review_id} = useParams()
    const [error, setError ] = useState(false)

    useEffect(()=>{
        setIsloading(true)
        setError(false)
        getSingleReview(review_id).then((data) => {
            setReview(data)
            setIsloading(false)
        }).catch(() => {
            setIsloading(false)
            setError(true)
        })
    }, [])


    const voteChanger = (num) => {
        setVoteChange((currVoteChange) => {
            return (currVoteChange + num)})

        patchVotes(review_id, num).catch(() =>{
            setVoteChange((currVoteChange) => {
                return (currVoteChange - num)})
            console.error('Ooops something went wrong!');
        })
    }
    
    if(isLoading) {
        return <p>Loading...</p>
    }

    if (error) {return Error()}

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
            <p>Votes:{review.votes + voteChange}</p>
            <button onClick={() => {voteChanger(1)}}>👍</button>
            <button onClick={() => {voteChanger(-1)}}>👎</button>
            <button>Delete</button>
            <Comments comments={comments} setComments={setComments}/>
            <CommentPoster comments={comments} setComments={setComments}/>
        </section>
        </>
    )
}