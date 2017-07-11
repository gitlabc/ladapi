import React from 'react';
import renderer from 'react-test-renderer';
import CompetitroList from './CompetitorList';
import { shallow , mount, render} from 'enzyme';

import { event, competitors } from '../../utils/testUtils';

describe('CompetitroList', () => {
    test('should generate the CompetitroList', () => {
        const wrapper = renderer.create(<CompetitroList
            event={event}
            competitors={competitors}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should have 10 CompetitorListItem', () => {
        const wrapper = shallow(
            <CompetitroList
                event={event}
                competitors={competitors}
            />
        );
        expect(wrapper.find('CompetitorListItem')).toHaveLength(10);
    });

    test('should have 20 buttons', () => {
        const wrapper = render(
            <CompetitroList
                event={event}
                competitors={competitors}
            />
        );
        expect(wrapper.find('button')).toHaveLength(20);
    });
});
