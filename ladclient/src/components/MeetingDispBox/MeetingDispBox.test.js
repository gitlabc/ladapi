import React from 'react';
import renderer from 'react-test-renderer';
import MeetingDispBox from './MeetingDispBox';
import { shallow, mount, render } from 'enzyme';

import { event, meetingEvents, meeting } from '../../utils/testUtils';

describe('MeetingDispBox', () => {
    test('should generate the MeetingDispBox', () => {
        const wrapper = renderer.create(
            <MeetingDispBox meeting={meeting} />
        );

        expect(wrapper).toMatchSnapshot();
    });


    test('should dispay the meeting', () => {
        const wrapper = render(
            <MeetingDispBox meeting={meeting} />
        );
        expect(wrapper.text()).toContain(meeting.name.toUpperCase());
    });
});
