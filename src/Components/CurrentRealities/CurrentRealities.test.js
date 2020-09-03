import React from 'react';
import {render} from '@testing-library/react';
import CurrentRealities from './CurrentRealities';

test('displays component name', async () => {
    const {getByText} = render(<CurrentRealities/>);
    expect(getByText(/current realities/i)).toBeInTheDocument();
});