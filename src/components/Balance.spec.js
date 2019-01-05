import React from 'react';
import { shallow } from 'enzyme';
import Balance from "./Balance.jsx";

describe('Exchange rate page', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<Balance/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})