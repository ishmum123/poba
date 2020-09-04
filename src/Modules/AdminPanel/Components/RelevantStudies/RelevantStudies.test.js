import React from 'react';
import {render} from '@testing-library/react';
import RelevantStudies from './RelevantStudies';

test('displays component name', async () => {
    const {getByText} = render(<RelevantStudies/>);
    expect(getByText(/relevant studies/i)).toBeInTheDocument();
});