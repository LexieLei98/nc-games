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