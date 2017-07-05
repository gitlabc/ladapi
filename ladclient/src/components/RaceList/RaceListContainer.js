import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RaceList from './RaceList';

import toJS from '../../utils/toJS';

import { fetchTimerStop, updateTimerStop, updateTimerTick, getSelectedRace } from '../../redux/actions';

const mapStateToProps = (state) => {
    const raceTypes = state.get('raceTypes');
    const events = state.getIn(['next5', 'events']);
    // const meetings = next5.get('meetings');
    const now = (new Date()).getTime();
    const [...keys] = events
        .filter(e => {
            return e.get('outcome') * 1000 >= now && raceTypes.get(e.get('type'))
        })
        .sort((e1, e2) => {
            const gap = e1.get('outcome') - e2.get('outcome');
            return gap > 0 ? 1 : gap < 0 ? -1 : 0;
        })
        .take(5)
        .keys();
    return {
        keys: keys,
        races: events,
    };
}

const mapDispatchToProps = (dispatch, { history }) => ({
    startUpdate: () => {
        dispatch(updateTimerTick());
    },
    stopUpdate: () => {
        dispatch(updateTimerStop());
    },
    onRaceClick: (raceId, meetingID) => () => {
        dispatch(updateTimerStop());
        dispatch(fetchTimerStop());
        dispatch(getSelectedRace(raceId, meetingID));
        history.push('/race');
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(RaceList)));
