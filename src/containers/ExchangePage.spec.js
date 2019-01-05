import React from 'react';
import { shallow } from 'enzyme';
import ExchangePage from "./ExchangePage.jsx";

describe('Exchange rate page', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<ExchangePage/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})