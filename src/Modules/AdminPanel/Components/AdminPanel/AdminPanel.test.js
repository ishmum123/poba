import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import AdminPanel from './AdminPanel';

test('calls function on login click', async () => {
    const mockCallback = jest.fn();
    const {getByText} = render(<AdminPanel logoutCallback={mockCallback}/>);

    fireEvent.click(getByText(/log out/i));
    expect(mockCallback).toHaveBeenCalled();
});