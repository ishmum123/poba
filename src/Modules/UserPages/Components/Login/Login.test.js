import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Login from './Login';

test('calls function on login click', async () => {
    const mockCallback = jest.fn();
    const {getByText} = render(<Login loginCallback={mockCallback}/>);

    fireEvent.click(getByText(/login/i));
    expect(mockCallback).toHaveBeenCalled();
});