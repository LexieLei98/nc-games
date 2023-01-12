import axios from 'axios';

const gameApi = axios.create({
    baseURL : 'https://lexies-nc-games.onrender.com/api'
})

export const getCategories = () => {
    return gameApi.get('/categories')
    .then((response) => {
        return response.data
    })
}

export const getReviews = (category, sortBy, order) => {
    let reviewString = '/reviews'
    if(sortBy) {
        reviewString += `?sort_by=${sortBy}`
        if(order) reviewString += `&&order=${order}`
        if(category) reviewString += `&&category=${category}` 
    }

    return gameApi.get(reviewString)
    .then((response) => {
        return response.data.reviews
    })
}

export const getSingleReview = (review_id) =>{
    return gameApi.get(`/reviews/${review_id}`)
    .then((response) => {
        return response.data.review
    })
}

export const getComments = (review_id) => {
    return gameApi.get(`/reviews/${review_id}/comments`)
    .then((response)=> {
        return response.data.comments
    })
}

export const patchVotes = (review_id, num) => {
    const patchBody = {
        inc_votes: num
    }
    return gameApi.patch(`/reviews/${review_id}`, patchBody)
    .then((response) => {
        return response.data.review
    })
}

export const postComment = (review_id, author, body) => {
    const postBody = {
        username:author,
        body:body
    }
    return gameApi.post(`/reviews/${review_id}/comments`, postBody)
    .then((response) => {
        return response.data.comments
    })
}