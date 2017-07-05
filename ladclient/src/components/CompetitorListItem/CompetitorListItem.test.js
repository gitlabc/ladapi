import React from 'react';
import renderer from 'react-test-renderer';
import RaceListItem from './RaceListItem';
import {shallow} from 'enzyme';

describe('RaceListItem', () => {
    
    test('should toggles erro type when show/hide password clicked', () => {
        const wrapper1 = shallow(<RaceListItem 
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => { }}
            required
        />);

        expect(wrapper1.find('div')).toHaveLength(1);
        
        const wrapper2 = shallow(<RaceListItem 
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => { }}
            required
            error="First name is required."            
        />);

        expect(wrapper2.find('div')).toHaveLength(2);
    });
    

    test('should hides error by default', () => {
        const tree = renderer.create(
            <RaceListItem
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => { }}
                required
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('should shows error when error is set', () => {
        const tree = renderer.create(
            <RaceListItem
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => { }}
                required
                error="First name is required."
            />
        ).toJSON(); 

        expect(tree).toMatchSnapshot();
    });
    
});
