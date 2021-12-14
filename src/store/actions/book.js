import { FETCH_BOOKS_ERROR, 
        FETCH_BOOKS_LOAD, 
        FETCH_BOOKS_SUCCESS, 
        FETCH_BOOK_SUCCESS, 
        PAGINATE, 
        START_LOADING 
} from "./actionTypes"
import { resultLoadMore } from "./values"
import axios from "axios"


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

export function fetchBookSuccess(book) {
    return {
        type: FETCH_BOOK_SUCCESS,
        book
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

export function fetchBookById(bookId) {
    return async (dispatch) => {
        dispatch(loadingStart())

        const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`

        try {
            const response = await axios.get(url)
            const book = response.data

            dispatch(fetchBookSuccess(book))
            
        } catch (e) {
            dispatch(fetchBooksError(e))
        }
    }
}

