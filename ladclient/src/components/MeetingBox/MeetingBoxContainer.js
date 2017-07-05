import { connect } from 'react-redux';
import { fromJS } from 'immutable';

import toJS from '../../utils/toJS';
import MeetingBox from './MeetingBox';

import { getSelectedRace } from '../../redux/actions';

const mapStateToProps = (state) => {
    const allMeetings = state.getIn(['next5', 'meetings']);
    const allEvents = state.getIn(['next5', 'events']);

    const eventId = state.getIn(['selectRace', 'eventId']);

    const meetingId = state.getIn(['selectRace', 'meetingId']) + '';
    const meeting = allMeetings.get(meetingId)
        || allMeetings.first()
        || fromJS({ name: 'no recoreds' });
    const events = (meeting.has("events") && meeting.get("events").map(eventId => {
        return allEvents.get(eventId + '');
    })) || fromJS([]);

    return {
        eventId,
        meeting,
        events,
    };
}

const mapDispatchToProps = (dispatch) => ({
    onEventClick: (eventId, meetingId) => () => {
        dispatch(getSelectedRace(eventId, meetingId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(MeetingBox));
