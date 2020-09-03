import React from 'react';
import {render} from '@testing-library/react';
import PastActivities from './PastActivities';

test('displays component name', async () => {
    const {getByText} = render(<PastActivities/>);
    expect(getByText(/past activities/i)).toBeInTheDocument();
});