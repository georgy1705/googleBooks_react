import { CATEGORY_VALUE, SEARCH_VALUE, SORT_VALUE} from "../actions/actionTypes"

const initialState = {
    rightCategory: 'all',
    rightSort: 'relevance',
    searchValue: ''
}   

export default function valuesReducer(state = initialState, action) {
    switch(action.type) {
        case SORT_VALUE:
            return {
                ...state, rightSort: action.rightSort
            }
        case CATEGORY_VALUE:
            return {
                ...state, rightCategory: action.rightCategory
            }
        case SEARCH_VALUE:
            return {
                ...state, searchValue: action.searchValue
            }

        default:
            return state
    }
}