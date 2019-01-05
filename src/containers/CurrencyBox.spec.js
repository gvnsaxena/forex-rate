import React from 'react';
import { shallow } from 'enzyme';
import CurrencyBox from "./CurrencyBox.jsx";

describe('Exchange rate page', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<CurrencyBox/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})