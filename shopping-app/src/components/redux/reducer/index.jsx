
import { productReducer ,selecteProductReducer} from "./reducer";

import {combineReducers} from "redux"

const rootReducers=combineReducers({
    productReducer,
    selecteProductReducer
})
export default rootReducers