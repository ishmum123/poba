import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Container from './Container';

test('calls function on login click', async () => {
    const mockCallback = jest.fn();
    const {getByText} = render(<Container loginCallback={mockCallback}/>);

    fireEvent.click(getByText(/login/i));
    expect(mockCallback).toHaveBeenCalled();
});