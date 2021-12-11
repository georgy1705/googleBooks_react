import { FETCH_BOOKS_SUCCESS } from "../actions/actionTypes"
import { FETCH_BOOKS_ERROR } from "../actions/actionTypes"


const initialState = {
    books: [],
    apiKey: 'AIzaSyDd5yviImWSlRzjbyvr-qhUwLL5M7jHfNc',
    error: null,
    loading: false
}

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state, loading: false, books: action.books
            }
        default:
            return state
    }
}