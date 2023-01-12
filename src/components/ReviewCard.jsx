import { Link } from 'react-router-dom'
export default function ReviewCard ({owner, category, title, review_img_url, review_id, votes, designer,created_at, comment_count}) {
    return(
        <>
        <br />
        <Link to={`/reviews/${review_id}`}
        key={review_id}>
        <section id="ReviewCard">
            <h3><strong>{title}</strong></h3>
            <p>Designed by: {designer}</p>
            <p>Created at: {created_at}</p>
            <p>Category: {category}</p>
            <img src={review_img_url} alt ={`a pic of ${title}`} className="ReviewImg"/>
            <p>Owner: {owner}</p>
            <p>Votes:{votes}</p>
            <p>Comments: {comment_count}</p>
        </section>
        </Link>
        </>
    )
}