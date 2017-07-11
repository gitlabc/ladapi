import React from 'react';
import renderer from 'react-test-renderer';
import RaceListItem from './RaceListItem';
import { shallow, mount, render } from 'enzyme';

import { event, now } from '../../utils/testUtils';

describe('RaceListItem', () => {
    test('should generate the RaceListItem', () => {
        const wrapper = renderer.create(<RaceListItem
            event={event}
            now={now}
            onRaceClick={() => { }}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should display meeting name and race_num', () => {
        const wrapper = render(
            <RaceListItem
                event={event}
                now={now}
                onRaceClick={() => { }}
            />
        );
        expect(wrapper.text()).toContain(event.meetingName.toUpperCase());
        expect(wrapper.text()).toContain('R'+event.race_num);
    });

    test('should have 1 button', () => {
        const wrapper = render(
            <RaceListItem
                event={event}
                now={now}
                onRaceClick={() => { }}
            />
        );
        expect(wrapper.find('button')).toHaveLength(1);
    });

    test('simulate click events', () => {
        let eventId = 0;
        let meetingId = 0;
        const onRaceClick = jest.fn().mockImplementation((e, m) => () => {
            eventId = e;
            meetingId = m;
        });
        const wrapper = mount(
            <RaceListItem
                event={event}
                now={now}
                onRaceClick={onRaceClick}
            />
        );
        const index = 0;
        expect(onRaceClick.mock.calls).toHaveLength(1);
        wrapper.find('button').forEach((btn, i) => {
            if (i === index) {
                btn.simulate('click');
            }
        });
        expect([event.id, event.meeting_id]).toEqual([eventId, meetingId]);
    });
});
