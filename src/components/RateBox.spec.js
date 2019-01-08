import React from 'react';
import { shallow } from 'enzyme';
import RateBox from "./RateBox.jsx";

describe('Rate Box', () => {
    let component = "";
    const buildComponent = (props) => {
        return shallow( <RateBox { ...props}/>)
    };
    beforeEach(() => {
        component = buildComponent({
            exSymbolValue:{
                value:2,
                requiredFields : 'AED'
            },
            className:'input-rate-box'
        });
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})