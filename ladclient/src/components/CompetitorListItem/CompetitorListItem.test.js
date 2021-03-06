import React from 'react';
import renderer from 'react-test-renderer';
import CompetitroListItem from './CompetitorListItem';
import { shallow , mount, render} from 'enzyme';

import { event, competitor, now } from '../../utils/testUtils';

describe('CompetitroListItem', () => {
    test('should generate the CompetitorListItem', () => {
        const wrapper = renderer.create(<CompetitroListItem
            event={event}
            competitor={competitor}
            now={now}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should have two buttons', () => {
        const wrapper = render(
            <CompetitroListItem
                event={event}
                competitor={competitor}
                now={now}
            />
        );
        expect(wrapper.find('button')).toHaveLength(2);
    });
});
