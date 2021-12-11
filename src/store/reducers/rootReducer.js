import { combineReducers } from "redux";
import bookReducer from "./book";

import valuesReducer from "./values";


export default combineReducers({
    books: bookReducer,
    result: valuesReducer
})