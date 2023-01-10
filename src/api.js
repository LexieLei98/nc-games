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

export const getReviews = () => {
    return gameApi.get('/reviews')
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