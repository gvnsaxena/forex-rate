import React from 'react';
import { shallow } from 'enzyme';
import RateBox from "./RateBox.jsx";

describe('Rate Box', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<RateBox/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})