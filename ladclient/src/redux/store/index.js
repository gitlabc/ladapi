import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

import rootReducer from '../reducers';

const initialState = Immutable.fromJS({});

const loggerMiddleware = createLogger({ stateTransformer: state => state.toJS() });


const configureStore = (preloadState = initialState) => {
    const store = createStore(
        rootReducer,
        preloadState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    );
    return store;
};

export default configureStore;