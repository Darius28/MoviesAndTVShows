import { GET_MOVIE_NAME,
    FETCH_MOVIE_SUCCESS,
    GET_MOVIE_GENRE, 
    SAVE_SELECTED_MOVIE,
    MOVIE_LOADING,
    MOVIE_LOADING_SUCCESS,
    MOVIE_LOADING_FAILURE,
    GET_MOVIE_CAST,
    GET_SELECTED_MOVIE_ID
} from '../actions/ActionTypes'

const initialState = {
    loading: '',
    search_query: "",
    selected_movie: [],
    movies: [],
    genres: [],
    load_error: '',
    movie_cast: [],
    movie_id: ''
}

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case GET_MOVIE_NAME:
            return{
                ...state,
                search_query: action.payload
            }
        case FETCH_MOVIE_SUCCESS:
            return{
                ...state,
                movies: action.payload
            }
        case GET_MOVIE_GENRE:
            return{
                ...state,
                genres: action.payload
            }
        case SAVE_SELECTED_MOVIE:
            return{
                ...state,
                selected_movie: action.payload
            }

        case MOVIE_LOADING:
            return{
                ...state,
                loading: true
            }
        case MOVIE_LOADING_FAILURE:
            return{
                ...state,
                loading: false,
                load_error: action.payload
            }
        case MOVIE_LOADING_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case GET_MOVIE_CAST:
            return{
                ...state,
                movie_cast: action.payload
            }
        case GET_SELECTED_MOVIE_ID:
            return{
                ...state,
                movie_id: action.payload
            }
        default: return state
    }
}


 