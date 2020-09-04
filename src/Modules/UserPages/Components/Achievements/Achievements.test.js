import React from 'react';
import {render} from '@testing-library/react';
import Achievements from './Achievements';

test('displays component name', async () => {
    const {getByText} = render(<Achievements/>);
    expect(getByText(/achievements/i)).toBeInTheDocument();
});