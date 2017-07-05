import React from 'react';
import { shallow } from 'enzyme';
import RaceList from './RaceList';

describe('RaceList', () => {
    test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
        const wrapper = shallow(<RaceList percent={50} width={500} />);
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    });
});