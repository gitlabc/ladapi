import Immutable from 'immutable';

export const initRaceTypeState = Immutable.fromJS({
    T: true, //Thoroughbred
    G: true, //Greyhounds
    H: true, //Harness
});

export const initSelectRaceState = Immutable.fromJS({
    eventId: 0,
    meetingId: 0,
    competitors: [],
});

export const initTimerState = Immutable.fromJS({
    fetchTimerStop: false,
    fetchTimestamp: 0,
    updateTimerStop: false,
    updateTimestamp: 0,
});

export const initUiState = Immutable.fromJS({
    spinnerVisible: false,
});

export const initNext5State = Immutable.fromJS({
    events: {},
    meetings: {},
});
