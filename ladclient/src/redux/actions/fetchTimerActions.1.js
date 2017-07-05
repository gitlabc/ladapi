import {
    FETCH_TIMER_START,
    FETCH_TIMER_STOP,
    FETCH_TIMER_TICK,
} from './actionTypes';


let timer = null;
export const startFetchTimer = () => {
    return (dispatch) => {
        clearInterval(timer);
        timer = setInterval(() => {
            dispatch(updateTimerTick())
        }, 1000);
        dispatch(updateTimerStart());
        dispatch(updateTimerTick());
    };
};

export const stopUpdateTimer = () => {
    return (dispatch) => {
        clearInterval(timer);
        dispatch(updateTimerStop());
    }
}

export const updateTimerTick = () => ({ type: UPDATE_TIMER_TICK });
export const updateTimerStart = () => ({ type: UPDATE_TIMER_START });
export const updateTimerStop = () => ({ type: UPDATE_TIMER_STOP });
 