import {
    CHANGE_RACE_TYPE,
} from './actionTypes';

export const changeRaceType = (raceType) => (
    {
        type: CHANGE_RACE_TYPE,
        payload: raceType,
    });
