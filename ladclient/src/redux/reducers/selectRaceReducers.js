import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { initSelectRaceState } from './initialState';

const selectRaceReducers = handleActions({
    REQUEST_RACE: (state, { payload }) => (
        state.merge(payload)
    ),
    RECEIVE_RACE: (state, { payload }) => {
        // let reaceEvents = getRaceEvents(payload);
        let newState = state.merge(fromJS({
            competitors: payload.competitors,
        }));
        return newState;
    }
}, initSelectRaceState);

export default selectRaceReducers;