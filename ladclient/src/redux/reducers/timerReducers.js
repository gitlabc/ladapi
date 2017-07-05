import { handleActions } from 'redux-actions';
import { initTimerState } from './initialState';
import { getCurrentTimestamp } from '../../utils/commonUtils';

const timeReducers = handleActions({
    UPDATE_TIMER_TICK: (state, { type }) => {
        return state.merge({
            updateTimerStop: false,
            updateTimestamp: getCurrentTimestamp(),
        });
    },
    UPDATE_TIMER_STOP: (state, { type }) => {
        return state.merge({
            updateTimerStop: true,
        });
    },
    FETCH_TIMER_TICK: (state, { type }) => {
        return state.merge({
            fetchTimerStop: false,
            fetchTimestamp: getCurrentTimestamp(),
        });
    },
    FETCH_TIMER_STOP: (state, { type }) => {
        return state.merge({
            fetchTimerStop: true,
        });
    },
}, initTimerState);

export default timeReducers;