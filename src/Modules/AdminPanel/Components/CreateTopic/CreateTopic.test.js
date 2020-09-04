import React from 'react';
import {render} from '@testing-library/react';
import CreateTopic from './CreateTopic';

test('displays component name', async () => {
    const {getByText} = render(<CreateTopic/>);
    expect(getByText(/create topic/i)).toBeInTheDocument();
});