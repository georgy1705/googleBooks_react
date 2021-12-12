import { FETCH_BOOKS_ERROR, 
        FETCH_BOOKS_LOAD, 
        FETCH_BOOKS_SUCCESS, 
        PAGINATE, 
        START_LOADING 
} from "./actionTypes"
import { resultLoadMore } from "./values"


export function fetchBooksError(e) {
    return {
        type: FETCH_BOOKS_ERROR,
        error: e
    }
}

export function loadingStart() {
    return {
        type: START_LOADING
    }
}

export function fetchBooksSuccess(books, totalItems) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books,
        totalItems
    }
}

export function fetchBooksLoad(books) {
    return {
        type: FETCH_BOOKS_LOAD,
        books
    }
}

export function paginate(val) {
    return {
        type: PAGINATE,
        stepPaginate: val
    }
}

export function fetchBooks() {
    return resultLoadMore()
}

