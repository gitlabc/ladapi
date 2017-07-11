import React from 'react';
import renderer from 'react-test-renderer';
import EventInfoBox from './EventInfoBox';
import { shallow, mount, render } from 'enzyme';

import { event, competitor, now } from '../../utils/testUtils';

describe('CompetitroListItem', () => {
    test('should generate the CompetitorListItem', () => {
        const wrapper = renderer.create(<EventInfoBox
            event={event}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should have two buttons', () => {
        const wrapper = render(
            <EventInfoBox
                event={event}
                competitor={competitor}
                now={now}
            />
        );
        expect(wrapper.text()).toContain('RACE ' + event.race_num);
        expect(wrapper.text()).toContain(event.description);
    });
});
