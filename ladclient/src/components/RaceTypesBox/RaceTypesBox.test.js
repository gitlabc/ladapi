import React from 'react';
import renderer from 'react-test-renderer';
import RaceTypesBox from './RaceTypesBox';
import { shallow, mount, render } from 'enzyme';

import { raceTypes } from '../../utils/testUtils';

describe('RaceTypesBox', () => {
    test('should generate the RaceTypesBox', () => {
        const wrapper = renderer.create(<RaceTypesBox
            raceTypes={ raceTypes}
            onRaceTypeClick={() => { }}
        />);

        expect(wrapper).toMatchSnapshot();
    });


    test('should have 3 button', () => {
        const wrapper = render(<RaceTypesBox
            raceTypes={raceTypes}
            onRaceTypeClick={() => { }}
        />);

        expect(wrapper.find('button')).toHaveLength(3);
    });

    test('simulate click events', () => {
        let key = '';
        const onRaceTypeClick = jest.fn().mockImplementation((k) => () => {
            key = k;
        });
        const wrapper = mount(
            <RaceTypesBox
                raceTypes={raceTypes}
                onRaceTypeClick={onRaceTypeClick}
            />
        );
        const index = 2;
        expect(onRaceTypeClick.mock.calls).toHaveLength(3);
        wrapper.find('button').forEach((btn, i) => {
            if (i === index) {
                btn.simulate('click');
            }
        });
        expect(key).toEqual(Object.keys(raceTypes)[index]);
    });
});
