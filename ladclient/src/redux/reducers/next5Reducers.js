import {fromJS} from 'immutable';
import { handleActions } from 'redux-actions';
import { initNext5State } from './initialState';
import { getNext5MeetingsAndEvents } from '../../utils/normalizrUtils';

const next5Reducers = handleActions({
    RECEIVE_NEXT5: (state, { payload }) => {
        let meetingsAndEvents = getNext5MeetingsAndEvents(payload);
        let newState = state.merge({
            events: fromJS(meetingsAndEvents.entities.events),
            meetings: fromJS(meetingsAndEvents.entities.meetings),
        });
        return newState;
    }
}, initNext5State);

export default next5Reducers;