import React from 'react';
import {render} from '@testing-library/react';
import {mount, configure} from 'enzyme';
import Home from './Home';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const mockFn = jest.fn(_ => Promise.resolve({TotalConfirmed: 3560, TotalDeaths: 350, TotalRecovered: 3300}));

jest.mock('../Services/DataConnector', () => jest.fn().mockImplementation(() => ({getGlobalSummary: mockFn})));

beforeEach(() => mockFn.mockClear());

test('displays global summary', () => {
    const wrapper = mount(<Home/>);

    return wrapper.instance().componentDidMount().then(() => {
        wrapper.update();

        const confirmed = wrapper.find('.confirmed').innerHTML;
        expect(confirmed).toBe('3500');

        const deaths = wrapper.find('.deaths').innerHTML;
        expect(deaths).toBe('350');

        const recovered = wrapper.find('.recovered').innerHTML;
        expect(recovered).toBe('3300');
    });
});
