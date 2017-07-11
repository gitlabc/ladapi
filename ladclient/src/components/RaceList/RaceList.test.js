import React from 'react';
import renderer from 'react-test-renderer';
import RaceList from './RaceList';
import { shallow, mount, render } from 'enzyme';

import { top5Events } from '../../utils/testUtils';

describe('RaceList', () => {
    test('should generate the RaceList', () => {
        const wrapper = renderer.create(<RaceList
            top5Events={top5Events}
            onRaceClick={() => { }}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should have 5 RaceListItem', () => {
        const wrapper = shallow(
            <RaceList
                top5Events={top5Events}
                onRaceClick={() => { }}
            />
        );
        expect(wrapper.find('RaceListItem')).toHaveLength(5);
    });

    test('should have 5 buttons', () => {
        const wrapper = render(
            <RaceList
                top5Events={top5Events}
                onRaceClick={() => { }}
            />
        );
        expect(wrapper.find('button')).toHaveLength(5);
    });

    test('simulate click events', () => {
        let eventId = 0;
        let meetingId = 0;
        const onEventClick = jest.fn().mockImplementation((e, m) => () => {
            eventId = e;
            meetingId = m;
        });
        const wrapper = mount(
            <RaceList
                top5Events={top5Events}
                onRaceClick={onEventClick}
            />
        );
        const index = 1;
        expect(onEventClick.mock.calls).toHaveLength(5);
        wrapper.find('button').forEach((btn, i) => {
            if (i === index) {
                btn.simulate('click');
            }
        });
        expect([top5Events[index].id, top5Events[index].meeting_id]).toEqual([eventId, meetingId]);
    });
});
