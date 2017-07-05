import {
    TIMER_START,
    TIMER_STOP,
    UPDATE_TIMER_TICK,
    UPDATE_TIMER_STOP,
    FETCH_TIMER_TICK,
    FETCH_TIMER_STOP,
} from './actionTypes';

import { getNext5Races } from './next5Actions';

let timer = null;
const FETCH_INTERVAL_SEC = 60;
const dispatchFetchTimer = (dispatch, getState) => {
    let fetchTimerStop = !!getState().getIn(['timer', 'fetchTimerStop']);
    let fetchTimeStamp = getState().getIn(['timer', 'fetchTimestamp']);
    let currentTimeStamp = (new Date()).getTime();
    let timeGap = currentTimeStamp - fetchTimeStamp;
    if (fetchTimerStop === false && timeGap > FETCH_INTERVAL_SEC * 1000) {
        dispatch(fetchTimerTick());
        dispatch(getNext5Races());
    }
}
const dispatchUpdateTimer = (dispatch, getState) => {
    let updateTimerStop = !!getState().getIn(['timer', 'updateTimerStop']);
    if (updateTimerStop === false) {
        dispatch(updateTimerTick());
    }
}

export const startTimer = () => {
    return (dispatch, getState) => {
        clearInterval(timer);
        timer = setInterval(() => {
            dispatchUpdateTimer(dispatch, getState);
            dispatchFetchTimer(dispatch, getState);
        }, 1000);
        dispatch(timerStart());
        dispatchFetchTimer(dispatch, getState);
    };
};

export const stopTimer = () => {
    return (dispatch) => {
        clearInterval(timer);
        dispatch(updateTimerStop());
        dispatch(fetchTimerStop());
        dispatch(timerStop());
    }
}

export const timerStart = () => ({ type: TIMER_START });
export const timerStop = () => ({ type: TIMER_STOP });
export const updateTimerTick = () => ({ type: UPDATE_TIMER_TICK });
export const updateTimerStop = () => ({ type: UPDATE_TIMER_STOP });
export const fetchTimerTick = () => ({ type: FETCH_TIMER_TICK });
export const fetchTimerStop = () => ({ type: FETCH_TIMER_STOP });
