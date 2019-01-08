import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrencyDropdown from "./CurrencyDropdown.jsx";

describe('Currency Dropdown', () => {
    let component = "";
    const buildComponent = (props) => {
        return shallow( <CurrencyDropdown { ...props}/>)
    };

    beforeEach(() => {
        component = buildComponent({
            currency:{
                AED:123
            },
            dispatch:jest.fn(),
            selectId : "enabledSelect"
        });
    });
    it('should render', () => {
      expect(component).toBeTruthy();
    });
    it('calls onChange', () => {
        let props = {
            currency:{
                AED:123
            },
            dispatch:jest.fn(),
            selectId : "enabledSelect"
        };
        component = mount( <CurrencyDropdown {...props}/>)
        component.find('select').simulate('change');
        expect(component.instance().props.dispatch).toHaveBeenCalled();
      });
})