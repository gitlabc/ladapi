import React from 'react';
import renderer from 'react-test-renderer';
import CompetitroListItem from './CompetitorListItem';
import {shallow} from 'enzyme';

describe('CompetitroListItem', () => {
    
    
    test('should be passed', () => {
        expect(true).toBe(true);
    });
    
    // test('should toggles erro type when show/hide password clicked', () => {
    //     const wrapper1 = shallow(<CompetitroListItem 
    //         htmlId="example-optional"
    //         label="First Name"
    //         name="firstname"
    //         onChange={() => { }}
    //         required
    //     />);

    //     expect(wrapper1.find('div')).toHaveLength(1);
        
    //     const wrapper2 = shallow(<CompetitroListItem 
    //         htmlId="example-optional"
    //         label="First Name"
    //         name="firstname"
    //         onChange={() => { }}
    //         required
    //         error="First name is required."            
    //     />);

    //     expect(wrapper2.find('div')).toHaveLength(2);
    // });
    

    // test('should hides error by default', () => {
    //     const tree = renderer.create(
    //         <CompetitroListItem
    //             htmlId="example-optional"
    //             label="First Name"
    //             name="firstname"
    //             onChange={() => { }}
    //             required
    //         />
    //     ).toJSON();

    //     expect(tree).toMatchSnapshot();
    // });

    // test('should shows error when error is set', () => {
    //     const tree = renderer.create(
    //         <CompetitroListItem
    //             htmlId="example-optional"
    //             label="First Name"
    //             name="firstname"
    //             onChange={() => { }}
    //             required
    //             error="First name is required."
    //         />
    //     ).toJSON(); 

    //     expect(tree).toMatchSnapshot();
    // });
    
});
