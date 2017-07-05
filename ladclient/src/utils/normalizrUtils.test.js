import { normalize, schema } from 'normalizr';
import { getRaceEvents } from './normalizrUtils';

import * as meetingsPackage from './meetings.json';

describe('getRaceEvents', () => {

    test('should return a flat events', () => {
        let meetings = meetingsPackage.updates[0].data;
        let events = getRaceEvents(meetings);
        expect(events).toMatchSnapshot();
    });
});
