/**
 * Created by admin on 09/10/2016.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// Middleware you want to use in production:
function thunkMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;

    return function (next) {
        return function (action) {
            return typeof action === 'function' ? action(dispatch, getState) : next(action);
        };
    };
}

const enhancer = applyMiddleware(promise);

export default function configureStore(initialState) {

    return createStore(rootReducer, initialState, enhancer)
}
