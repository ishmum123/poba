import React from 'react';
import {render} from '@testing-library/react';
import TopicList from './TopicList';

test('displays component name', async () => {
    const {getByText} = render(<TopicList/>);
    expect(getByText(/topic list/i)).toBeInTheDocument();
});