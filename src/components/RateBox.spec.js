import React from 'react';
import { shallow } from 'enzyme';
import RateBox from "./RateBox.jsx";

describe('Rate Box', () => {
    let component = "", instance="";
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
        instance = component.instance();
    })
    it('should render', function() {    
        expect(component).toBeTruthy();
    });
})