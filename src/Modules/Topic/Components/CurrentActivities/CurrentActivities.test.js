import React from 'react';
import {render} from '@testing-library/react';
import CurrentActivities from './CurrentActivities';

test('displays component name', async () => {
    const {getByText} = render(<CurrentActivities/>);
    expect(getByText(/current activities/i)).toBeInTheDocument();
});