import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index"

const initialState = {};
const middleware = [thunk]

const store = createStore(rootReducer, 
    initialState,
    compose(
        applyMiddleware(...middleware),  // To perform asyn operations
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // To debug Redux in the Browser
    ));

export default store;    