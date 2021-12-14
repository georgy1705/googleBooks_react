import 
{       
    FETCH_BOOKS_LOAD, 
    FETCH_BOOKS_SUCCESS, 
    FETCH_BOOK_SUCCESS, 
    PAGINATE, START_LOADING 
    } 
    from "../actions/actionTypes"
import { FETCH_BOOKS_ERROR } from "../actions/actionTypes"


const initialState = {
    books: [],
    apiKey: 'AIzaSyDd5yviImWSlRzjbyvr-qhUwLL5M7jHfNc',
    error: null,
    loading: false,
    stepPaginate: 0,
    totalItems: 0,
    fetchBooks: null,
    book: null
}

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state, loading: false, books: action.books, totalItems: action.totalItems, stepPaginate: 0
            }
        case FETCH_BOOK_SUCCESS:
            return {
                ...state, loading: false, book: action.book
            }
        case FETCH_BOOKS_LOAD:
            return {
                ...state, loading: false, books: action.books
            }
        case START_LOADING:
            return {
                ...state, loading: true
            }
        case PAGINATE:
            return {
                ...state, stepPaginate: action.stepPaginate
            }
        default:
            return state
    }
}