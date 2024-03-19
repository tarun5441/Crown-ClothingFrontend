import {combineReducers} from 'redux'

import cartReducer from './cart/reducer'
import userReducer from './user/reducer';
import categoryReducer from './category/reducer';


const rootReducer = combineReducers({
    cart: cartReducer,
    user:userReducer,
    categoryReducer:categoryReducer
    
    })

export default rootReducer;