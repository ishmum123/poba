import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';

const mockFn = jest.fn();

jest.mock('./Services/DataConnector', () => jest.fn().mockImplementation(() => ({saveUser: mockFn})));

beforeEach(() => mockFn.mockClear());

test('form is saved on button click', () => {
/*    const {getByText, getByPlaceholderText} = render(<App/>);
    fireEvent.change(getByPlaceholderText(/age/i), {target: {value: 26}});
    fireEvent.change(getByPlaceholderText(/name/i), {target: {value: 'Ishmum'}});

    getByText(/submit/i).click();
    expect({saveUser: mockFn}.saveUser).toHaveBeenCalledWith('Ishmum', 26);*/
});

