import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index'

const isDev = String(process.env.NODE_ENV).toLowerCase() === 'development';
const middleware = [thunkMiddleware, ...(isDev ? [logger] : [])];

const store = createStore(rootReducer,
    isDev ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware)
);

export default store;
