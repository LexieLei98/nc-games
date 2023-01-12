import { deleteComment } from "../api"

export default function CommentCard ({index, body, author,votes, created_at,comment_id, comments, setComments}) {
    const handleDelete = () => {
        deleteComment(comment_id)
        .then(() => {
            setComments(() => {
                return comments.filter((item,i)=> i!= index )
            })
        }) 
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