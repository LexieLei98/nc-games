import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { getComments } from "../api"
import CommentCard from "./CommentCard"

export const Comments = ({comments, setComments}) => {
    const [isLoading, setIsloading] = useState(true)
    const {review_id} = useParams()

    useEffect(()=>{
        setIsloading(true)
        getComments(review_id).then((data) => {
            setComments(data)
            setIsloading(false)
        })
    }, [])

    if(isLoading) {
        return <p>Loading...</p>
    }

    if(comments.length === 0) {
        return <p>Be the first one to comment!</p>
    }
    
    return(<section>
        {comments.map((comment, index) => {
            return (<CommentCard 
            className='CommentCard'
            key={comment.comment_id}
            comment={comment}
            comments={comments}
            setComments={setComments}
            comment_id={comment.comment_id}
            body={comment.body}
            author={comment.author}
            votes={comment.votes}
            index={index}
            created_at={comment.created_at}/>)
        })}
    </section>

    )

}