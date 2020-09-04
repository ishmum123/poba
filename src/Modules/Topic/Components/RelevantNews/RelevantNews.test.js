import React from 'react';
import {render} from '@testing-library/react';
import RelevantNews from './RelevantNews';

test('displays component name', async () => {
    const {getByText} = render(<RelevantNews/>);
    expect(getByText(/relevant news/i)).toBeInTheDocument();
});