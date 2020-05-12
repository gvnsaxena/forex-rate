import React from 'react';
import { shallow } from 'enzyme';
import CurrencyBox from "./CurrencyBox.jsx";

describe('Currency Box', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<CurrencyBox/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})