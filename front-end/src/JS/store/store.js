import { applyMiddleware, compose, createStore } from 'redux'
import reducerUser from '../reducers/reducerUser'
import thunk from "redux-thunk"

// let arr =[thunk, midl1, midl2]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducerUser,
    composeEnhancers(applyMiddleware(thunk))
    // composeEnhancers(applyMiddleware(...arr))
)

export default store