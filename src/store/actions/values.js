import { CATEGORY_VALUE, SEARCH_VALUE, SORT_VALUE } from "./actionTypes"
import { fetchBooksError, fetchBooksSuccess, loadingStart } from "./book";
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

    return {
        type: SEARCH_VALUE,
        searchValue: val,
    }
}

export function resultSearch() {

    return async (dispatch, getState) => {
        dispatch(loadingStart())
        
        let url = `https://www.googleapis.com/books/v1/volumes?q=${getState().result.searchValue}+subject:${getState().result.rightCategory}&orderBy=${getState().result.rightSort}&key=${getState().books.apiKey}`
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

