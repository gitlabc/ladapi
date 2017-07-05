import fetch from 'isomorphic-fetch';
import {
    REQUEST_RACE,
    RECEIVE_RACE,
    FAILED_RACE,
} from './actionTypes';

import {
    showSpinner,
    hideSpinner,
} from './uiActions';

function requestRace(raceId, meetingId) {
    return {
        type: REQUEST_RACE,
        payload: {
            eventId: raceId,
            meetingId: meetingId,
        },
    };
}

function receiveRace(json) {
    return {
        type: RECEIVE_RACE,
        payload: json,
    };
}

function failedRace() {
    return {
        type: FAILED_RACE,
    };
}

export const getSelectedRace = (raceId, meetingId) => {
    return (dispatch) => {
        dispatch(requestRace(raceId, meetingId));
        dispatch(showSpinner());
        return fetch(`http://localhost:8080/api/v1/next5?event_id=${raceId}`)
            .then(response => response.json())
            .then((json) => {
                if (json.status === 'Successful') {
                    var competitor = json.updates.filter(update => {
                        return update.type === 'competitor' && update.data.competitors.length > 0;
                    });
                    if (competitor.length) {
                        dispatch(receiveRace(competitor[0].data));
                        dispatch(hideSpinner());
                        return;
                    }
                }
                dispatch(failedRace())
                dispatch(hideSpinner());
            })
            .catch(() => {
                dispatch(failedRace())
            });
    };
};
