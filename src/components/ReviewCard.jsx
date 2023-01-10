import { Link } from 'react-router-dom'
export default function ReviewCard ({owner,review_body, category, title, review_img_url, review_id, votes}) {
    return(
        <>
        <br />
        <Link to={`/reviews/${review_id}`}
        key={review_id}>
        <section id="ReviewCard">
            <h3><strong>{title}</strong></h3>
            {/* <p>{review_body}</p> */}
            <img src={review_img_url} alt ={`a pic of ${title}`} className="ReviewImg"/>
            <p>Owner: {owner}</p>
            <p>Category: {category}</p>
            {/* <button>Votes:{votes}</button>
            <button>Delete</button> */}
        </section>
        </Link>
        </>
    )
}