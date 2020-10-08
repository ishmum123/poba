import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import UserPages from './UserPages';

test('calls function on login click', async () => {
    const mockCallback = jest.fn();
    const {getByText} = render(<UserPages loginCallback={mockCallback}/>);

    fireEvent.click(getByText(/login/i));
    expect(mockCallback).toHaveBeenCalled();
});