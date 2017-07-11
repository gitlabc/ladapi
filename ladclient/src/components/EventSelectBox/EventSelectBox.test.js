import React from 'react';
import renderer from 'react-test-renderer';
import EventSelectBox from './EventSelectBox';
import { shallow, mount, render } from 'enzyme';

import { event, meetingEvents, meeting } from '../../utils/testUtils';

describe('EventSelectBox', () => {
    test('should generate the EventSelectBox', () => {
        const wrapper = renderer.create(<EventSelectBox
            event={event}
            events={meetingEvents}
            meeting={meeting}
            onEventClick={() => { }}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should have equal buttons with events', () => {
        const wrapper = render(
            <EventSelectBox
                event={event}
                events={meetingEvents}
                meeting={meeting}
                onEventClick={() => { }}
            />
        );
        expect(wrapper.find('button')).toHaveLength(meetingEvents.length);
    });

    test('simulate click events', () => {
        let eventId = 0;
        let meetingId = 0;
        const onEventClick = jest.fn().mockImplementation((e, m) => () => {
            eventId = e;
            meetingId = m;
        });
        const wrapper = mount(
            <EventSelectBox
                event={event}
                events={meetingEvents}
                meeting={meeting}
                onEventClick={onEventClick}
            />
        );
        const index = 1;
        expect(onEventClick.mock.calls).toHaveLength(10);
        wrapper.find('button').forEach((btn, i) => {
            if (i === index) {
                btn.simulate('click');
            }
        });
        expect([meetingEvents[index].id, meeting.id]).toEqual([eventId, meetingId]);
    });
});
