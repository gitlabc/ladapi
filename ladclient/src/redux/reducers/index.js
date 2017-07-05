import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import uiReducers from './uiReducers';
import next5Reducers from './next5Reducers';
import raceTypeReducers from './raceTypeReducers';
import timerReducers from './timerReducers';
import selectRaceReducers from './selectRaceReducers';

const rootReducer = combineReducers({
    router: routerReducer,
    ui: uiReducers,
    next5: next5Reducers,
    raceTypes: raceTypeReducers,
    timer: timerReducers,
    selectRace: selectRaceReducers,
});

export default rootReducer;
