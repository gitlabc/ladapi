import fetch from 'isomorphic-fetch';
import {
    REQUEST_NEXT5,
    RECEIVE_NEXT5,
    FAILED_NEXT5,
} from './actionTypes';

import {
    showSpinner,
    hideSpinner,
} from './uiActions';

import {
    startTimer,
} from './timerActions';

function requestNext5() {
    return {
        type: REQUEST_NEXT5,
    };
}

function receiveNext5(json) {
    return {
        type: RECEIVE_NEXT5,
        payload: json,
    };
}

function failedNext5() {
    return {
        type: FAILED_NEXT5,
    };
}
const meetingUrl = `http://localhost:8080/api/v1/next5?meeting=all`;
// const meetingUrl = 'https://www.ladbrokes.com.au/api/actions/update?feeds%5Bnext5%5D%5Bhash%5D=123';

export const getNext5Races = () => {
    return (dispatch) => {
        dispatch(requestNext5());
        dispatch(showSpinner());
        return fetch(meetingUrl)
            .then(response => response.json())
            .then((json) => {
                if (json.status === 'Successful') {
                    var next5 = json.updates.filter(update => {
                        return update.type === 'next5' && update.data.length > 0;
                    });
                    if (next5.length) {
                        dispatch(receiveNext5(next5[0].data));
                        dispatch(hideSpinner());
                        dispatch(startTimer());
                        return;
                    }
                }
                dispatch(failedNext5())
                dispatch(hideSpinner());
            })
            .catch(() => {
                dispatch(failedNext5())
            });
    };
};
