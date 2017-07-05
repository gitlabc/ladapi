import { handleActions } from 'redux-actions';
import { initUiState } from './initialState';

const uiReducers = handleActions({
    SHOW_SPINNER: (state) => (
        state.set(
            'spinnerVisible',
            true
        )
    ),
    HIDE_SPINNER: (state) => (
        state.set(
            'spinnerVisible',
            false
        )
    ),
}, initUiState);


export default uiReducers;