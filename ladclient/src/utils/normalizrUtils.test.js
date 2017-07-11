import { getNext5MeetingsAndEvents, getNext5CompetitorData } from './normalizrUtils';

import * as meetingsPackage from './meetings.json';

describe('normalizrUtils', () => {

    test('should return a flat events array', () => {
        let meetings = meetingsPackage.updates[0].data;
        let events = getNext5MeetingsAndEvents(meetings);
        expect(events).toMatchSnapshot();
    });

    test('should return a flat competitor array', () => {
        let meetings = meetingsPackage;
        let competitors = getNext5CompetitorData(meetings);
        expect(competitors).toMatchSnapshot();
    });
});
