import React from 'react';
import {render} from '@testing-library/react';
import ArrangeTopic from './ArrangeTopic';

test('displays component name', async () => {
    const {getByText} = render(<ArrangeTopic/>);
    expect(getByText(/arrange topic/i)).toBeInTheDocument();
});