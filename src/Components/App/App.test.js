import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';

test('renders the page', () => {
    const {getAllByText} = render(<App/>);
    const element = getAllByText(/.*/i);
    expect(element.length > 0).toBe(true);
});

