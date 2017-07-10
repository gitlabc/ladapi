import { connect } from 'react-redux';
import { fromJS } from 'immutable';

import toJS from '../../utils/toJS';
import RacePage from './RacePage';

import { updateTimerStop, updateTimerTick, getSelectedRace } from '../../redux/actions';

const mapStateToProps = (state) => {
    const allMeetings = state.getIn(['next5', 'meetings']);
    const allEvents = state.getIn(['next5', 'events']);

    const eventId = state.getIn(['selectRace', 'eventId']) + '';
    const event = allEvents.get(eventId) || allEvents.first() || fromJS({});

    const meetingId = state.getIn(['selectRace', 'meetingId']) + '';
    const meeting = allMeetings.get(meetingId)
        || allMeetings.first()
        || fromJS({ name: 'no recoreds' });
    const events = (meeting.has("events") && meeting.get("events").map(eventId => {
        return allEvents.get(eventId + '');
    })) || fromJS([]);

    const competitors = state.getIn(['selectRace', 'competitors']) || fromJS([]);

    return {
        event,
        meeting,
        events,
        competitors,        
    };
}

const mapDispatchToProps = (dispatch) => ({
    stopUpdate: () => {
        dispatch(updateTimerStop());
    },
    startUpdate: () => {
        dispatch(updateTimerTick());
    },
    onEventClick: (eventId, meetingId) => () => {
        dispatch(getSelectedRace(eventId, meetingId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(RacePage));
