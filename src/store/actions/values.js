import { CATEGORY_VALUE, SEARCH_VALUE, SORT_VALUE } from "./actionTypes"
import { fetchBooksError, fetchBooksSuccess } from "./book";
import axios from "axios";

export function selectCategoryChangeHandler(val) {
    return {
        type: CATEGORY_VALUE,
        rightCategory: val,
    }
}

export function selectSortChangeHandler(val) {
    return {
        type: SORT_VALUE,
        rightSort: val,
    }
}

export function searchChangeHandler(val) {
    console.log(val);
    return {
        type: SEARCH_VALUE,
        searchValue: val,
    }
}

export function resultSearch(e) {
    // e.preventDefault()

    return async (dispatch, getState) => {
        
        let url = `https://www.googleapis.com/books/v1/volumes?q=js&projection=full&orderBy=${getState().result.rightSort}&key=${getState().books.apiKey}`
        console.log(url);
        console.log(getState().result.rightSort);
        try {
            const response = await axios.get(url)
            const book = response.data.items

            dispatch(fetchBooksSuccess(book))
            
        } catch (e) {
            dispatch(fetchBooksError(e))
        }
    }
}