import { handleActions } from 'redux-actions';
import { initRaceTypeState } from './initialState';

const raceTypeReducers = handleActions({
    CHANGE_RACE_TYPE: (state, { payload }) => (
        state.set(payload, !state.get(payload))
    )
}, initRaceTypeState);

export default raceTypeReducers;