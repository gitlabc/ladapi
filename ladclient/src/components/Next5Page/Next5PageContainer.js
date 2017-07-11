import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Next5Page from './Next5Page';

import toJS from '../../utils/toJS';

import { fetchTimerStop, updateTimerStop, updateTimerTick, getSelectedRace, changeRaceType } from '../../redux/actions';

const mapStateToProps = (state) => {
    const raceTypes = state.get('raceTypes');
    const objEvents = state.getIn(['next5', 'events']);
    const objMeetings = state.getIn(['next5', 'meetings']);
    // const meetings = next5.get('meetings');
    const now = (new Date()).getTime();
    const [...top5EventKeys] = objEvents
        .filter(e => {
            return e.get('outcome') * 1000 >= now && raceTypes.get(e.get('type'))
        })
        .sort((e1, e2) => {
            const gap = e1.get('outcome') - e2.get('outcome');
            return gap > 0 ? 1 : gap < 0 ? -1 : 0;
        })
        .take(5)
        .keys();
    const top5Events = top5EventKeys.map(key => {
        let event = objEvents.get(key).toJS()
        const meetingId = objEvents.getIn([key, 'meeting_id']) + '';
        event.meetingName = objMeetings.getIn([meetingId, 'name']);
        return event;
    });

    return {
        top5Events,
        raceTypes,
    };
}

const mapDispatchToProps = (dispatch, { history }) => ({
    startUpdate: () => {
        dispatch(updateTimerTick());
    },
    stopUpdate: () => {
        dispatch(updateTimerStop());
    },
    onRaceClick: (eventId, meetingID) => () => {
        // dispatch(updateTimerStop());
        dispatch(fetchTimerStop());
        dispatch(getSelectedRace(eventId, meetingID));
        history.push('/race');
    },
    onRaceTypeClick: (key) => () => {
        dispatch(changeRaceType(key));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(Next5Page)));
