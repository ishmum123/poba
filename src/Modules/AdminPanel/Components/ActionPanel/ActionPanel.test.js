import React from 'react';
import {render} from '@testing-library/react';
import ActionPanel from './ActionPanel';

test('displays component name', async () => {
    const {getByText} = render(<ActionPanel/>);
    expect(getByText(/action panel/i)).toBeInTheDocument();
});