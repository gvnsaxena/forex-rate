import React from 'react';
import { shallow } from 'enzyme';
import RateBox from "./RateBox.jsx";

describe('Exchange rate page', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<RateBox/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})