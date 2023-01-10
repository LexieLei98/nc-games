export default function CommentCard ({body, author,votes, created_at,comment_id}) {
    
    return(
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
        </section>
        </>
    )
}