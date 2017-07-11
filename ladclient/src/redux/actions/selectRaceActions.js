import fetch from 'isomorphic-fetch';
import { getNext5CompetitorData } from '../../utils/normalizrUtils';
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

function receiveRace(competitorData) {
    return {
        type: RECEIVE_RACE,
        payload: competitorData,
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
        return fetch(`http://localhost:8080/api/v1/next5?event=${raceId}`)
            .then(response => response.json())
            .then((json) => {
                if (json.status === 'Successful') {
                    const competitors = getNext5CompetitorData(json);
                    if (!!competitors) {
                        dispatch(receiveRace(competitors));
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
