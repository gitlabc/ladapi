import {fromJS} from 'immutable';
import { handleActions } from 'redux-actions';
import { initNext5State } from './initialState';
import { getRaceEvents } from '../../utils/normalizrUtils';

const next5Reducers = handleActions({
    RECEIVE_NEXT5: (state, { payload }) => {
        let reaceEvents = getRaceEvents(payload);
        let newState = state.merge({
            events: fromJS(reaceEvents.entities.events),
            meetings: fromJS(reaceEvents.entities.meetings),
        });
        return newState;
    }
}, initNext5State);

export default next5Reducers;