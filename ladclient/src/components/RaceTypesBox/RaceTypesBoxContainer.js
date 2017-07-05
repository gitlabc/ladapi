import { connect } from 'react-redux';
import RaceTypesBox from './RaceTypesBox';
import toJS from '../../utils/toJS';

import { changeRaceType } from '../../redux/actions';

const mapStateToProps = (state) => {
    const raceTypes = state.get('raceTypes');
    return {
        raceTypes: raceTypes,
    };
}

const mapDispatchToProps = (dispatch) => ({
    onRaceTypeClick: (key) => () => {
        dispatch(changeRaceType(key));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(RaceTypesBox));
