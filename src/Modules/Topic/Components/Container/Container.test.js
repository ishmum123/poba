import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Container from './Container';

test('calls function on login click', async () => {
    const mockCallback = jest.fn();
    const {getByText} = render(<Container logoutCallback={mockCallback}/>);

    fireEvent.click(getByText(/log out/i));
    expect(mockCallback).toHaveBeenCalled();
});