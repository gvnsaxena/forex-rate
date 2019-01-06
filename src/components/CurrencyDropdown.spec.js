import React from 'react';
import { shallow } from 'enzyme';
import CurrencyDropdown from "./CurrencyDropdown.jsx";

describe('Currency Dropdown', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<CurrencyDropdown/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})