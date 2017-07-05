import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import toJS from '../../utils/toJS';

import CompetitorList from './CompetitorList';

import { changeRaceType, updateTimerStop, updateTimerTick } from '../../redux/actions';

const mapStateToProps = (state) => {
    const competitors = state.getIn(['selectRace', 'competitors']) || fromJS([]);
    return {
        competitors: competitors,
    };
}

const mapDispatchToProps = (dispatch) => ({
    onRaceTypeClick: (key) => () => {
        dispatch(changeRaceType(key));
    },
    stopUpdate: () => {
        dispatch(updateTimerStop());
    },
    startUpdate: () => {
        dispatch(updateTimerTick());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(CompetitorList));
