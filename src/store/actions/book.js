import { FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS, START_LOADING } from "./actionTypes"
import { resultSearch } from "./values"


export function fetchBooks() {
    return resultSearch
}


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

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books
    }
}

