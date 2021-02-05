import { FETCH_MOVIE_SUCCESS, 
    GET_MOVIE_NAME, 
    GET_MOVIE_GENRE, 
    SAVE_SELECTED_MOVIE,
    MOVIE_LOADING,
    MOVIE_LOADING_SUCCESS,
    MOVIE_LOADING_FAILURE,
    GET_MOVIE_CAST,
    GET_SELECTED_MOVIE_ID
} 
from './ActionTypes'
import axios from 'axios'

export const fetchMovieSuccess = (data) => {
    console.log("fetchmoviesuccess", data)
    return{
        type: FETCH_MOVIE_SUCCESS,
        payload: data
    }
}

export const getApiDetails = (inp) => {
    return (dispatch) => {
        //console.log(inp)
        dispatch(movieLoading())
        axios.get('https://api.themoviedb.org/3/search/multi?api_key=e07157139c36e5c131e9aff04df1135c&language=en-US&query='
        +inp+'&page=1&include_adult=false')
        .then(res => {
            const data = res.data.results
            //console.log(data)
            dispatch(fetchMovieSuccess(data))
            dispatch(movieLoadingSuccess())
        })
        .catch(err => dispatch(movieLoadingFailure(err)))
    } 
}

export const getMovieName = (data) => {
    //console.log("getMovieName ", data)
    return {
        type: GET_MOVIE_NAME,
        payload: data
    }
}

export const getGenre = (data) => {
    //console.log("getGenre ", data)
    return {
        type: GET_MOVIE_GENRE,
        payload: data
    }
}

export const getGenreApiDetails = () => {
    return (dispatch) => {
        dispatch(movieLoading())
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e07157139c36e5c131e9aff04df1135c&language=en-US')
        .then(res => {
            const data = res.data.genres
            //console.log(data)           
            dispatch(getGenre(data))
            dispatch(movieLoadingSuccess())
        }) 
        .catch(err => movieLoadingFailure(err))
    }
}

export const saveSelectedMovie = (data) => {
    //console.log("saveSelectedMovie ", data)
    return {
        type: SAVE_SELECTED_MOVIE,
        payload: data
    }
}

export const movieLoading = () => {
    //console.log("movieLoading")
    return{
        type: MOVIE_LOADING
    }
}

export const movieLoadingSuccess = () => {
    //console.log("movieLoadingSuccess")
    return{
        type: MOVIE_LOADING_SUCCESS
    }
}

export const movieLoadingFailure = (data) => {
    //console.log('movieLoadingFailure ', data)
    return{
        type: MOVIE_LOADING_FAILURE,
        payload: data
    }
}

export const getMovieCastApi = (data) => {
    console.log('getMovieCast ', data)
    return(dispatch) => {
        dispatch(movieLoading())
        axios.get('https://api.themoviedb.org/3/movie/'+data+'/credits?api_key=e07157139c36e5c131e9aff04df1135c&language=en-US')
        .then(res => {
            const data = res.data.cast
            console.log('getMovieCast after api call', data)
            dispatch(getMovieCast(data))
            dispatch(movieLoadingSuccess())
        })
        .catch(err => movieLoadingFailure(err))
    }
}

export const getMovieCast = (data) => {
    console.log('data in action creator', data)
    return{
        type: GET_MOVIE_CAST,
        payload: data
    }
}

export const getSelectedMovieId = (data) => {
    console.log('getSelectedMovieId ', data)
    return {
        type: GET_SELECTED_MOVIE_ID,
        payload: data
    }
}

export const getTrendingApiDetails = () => {
    return (dispatch) => {
        dispatch(movieLoading())
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=e07157139c36e5c131e9aff04df1135c')
        .then(res => {
            const data = res.data.results
            console.log(data)
            dispatch(fetchMovieSuccess(data))
            dispatch(movieLoadingSuccess())
        })
        .catch(err => movieLoadingFailure(err))
    }   
}