import React from 'react';
import { shallow } from 'enzyme';
import UnitCurrenyDisplayBox from "./UnitCurrenyDisplayBox.jsx";

describe('Exchange rate page', () => {
    let component = "";
    beforeEach(() => {
        component = shallow(<UnitCurrenyDisplayBox/>);
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})