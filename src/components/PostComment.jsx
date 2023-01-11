import { useState } from "react";
import { useParams } from "react-router"
import { postComment } from "../api";

export const CommentPoster = ({comments, setComments}) => {
    //const [name, setName] = useState(['jessjelly'])
    const [body, setBody] = useState([])
    const {review_id} = useParams()
    
    const handlePost = (event) => {
        event.preventDefault();
        const newComment = {
            author: "jessjelly",
            body:body,
            created_at: Date(),
            votes:0
        }
        setComments([newComment,...comments])
        setBody([])

        const results = [...comments]
        postComment(review_id, 'jessjelly', body)
        .catch(() => {
            alert("Something went wrong, do you want to try again?")
            results.shift()
            setComments(results)
        })
    }
    
    return (
        <section className="commentPoster">
            <form onSubmit={handlePost}>
            <h3>Leave your thoughts here!</h3>
            <label htmlFor="author">
                Username:jessjelly
            {/* <input type="text" name="author"
            value={name}
            onChange={(event) => {setName(event.target.value)}}
            key='author' 
            placeholder="eg.jessjelly"
            required/> */}
            </label>
            <br/>
            <label htmlFor="body">
                Your comments:
            <input type="text" name="author"
            key='body'
            value={body}
            onChange={(event) => {setBody(event.target.value)}}
            placeholder="What do you think of it?"
            required />
            </label>
            <br/>
            <button>Submit</button>
            </form>

        </section>
    )
}