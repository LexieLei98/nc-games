import { useState } from "react"
import { deleteComment } from "../api"

export default function CommentCard ({index, body, author,votes, created_at,comment_id, comments, setComments}) {
    const [isLoading, setIsloading] = useState(false)

    const handleDelete = () => {
        const filteredComments = comments.filter((comment,i)=> i!== index)
        const originalComments = [...comments]
        setIsloading(true)
        setComments(filteredComments)
        alert('Yess, Comment deleted!')

        deleteComment(comment_id)
        .then(()=>{
            setIsloading(false)
        })
        .catch(() => {
            setComments(originalComments)
            alert('Oops something went wrong!! Maybe try again?')
        })
    }
    if(isLoading) {
        return <p>Loading...</p>
    }

    return (author === 'jessjelly')?
    (
        <>
        <br />
        <section id="CommentCard"
        key={comment_id}>
            <p><strong>{author}:</strong></p>
            <p>{body}</p>
            <p>Created_at: {created_at}</p>
            <p>Votes:{votes}</p>
            <button>👍</button>
            <button>👎</button>
            <button onClick={handleDelete}>Delete</button>
        </section>
        </>
    ):
    (   <>
        <br />
        <section id="CommentCard"
        key={comment_id}>
            <p><strong>{author}:</strong></p>
            <p>{body}</p>
            <p>Created_at: {created_at}</p>
            <p>Votes:{votes}</p>
            <button>👍</button>
            <button>👎</button>
        </section>
        </>);
}