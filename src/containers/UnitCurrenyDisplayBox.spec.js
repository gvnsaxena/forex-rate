import React from 'react';
import { shallow } from 'enzyme';
import UnitCurrenyDisplayBox from "./UnitCurrenyDisplayBox.jsx";

describe('Unit Curreny Display Box', () => {
    let component = "";
    const buildComponent = (props) => {
        return shallow( <UnitCurrenyDisplayBox { ...props}/>)
    };

    beforeEach(() => {
        component = buildComponent({
            exSymbolValue:{
                value:123,
                requiredFields : 'AED'
            }
        });
    });
    it('should render',  () => {
        expect(component).toBeTruthy();
    });
})