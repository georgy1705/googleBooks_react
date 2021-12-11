import { FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS } from "./actionTypes"
import { resultSearch } from "./values"


export function fetchBooks() {
    return resultSearch
}

// export function fetchQuizById(quizId) {
//     return async dispatch => {
//         dispatch(fetchQuizesStart)

//         try {
//             const response = await axios.get(`/quizes/${quizId}.json`)
//             const quiz = response.data

//             dispatch(fetchQuizSuccess(quiz))
//         } catch (e) {
//             dispatch(fetchQuizesError(e))
//         }
//     }
// }


export function fetchBooksError(e) {
    return {
        type: FETCH_BOOKS_ERROR,
        error: e
    }
}

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books
    }
}

