import React from 'react';
import {render} from '@testing-library/react';
import RelevantLaws from './RelevantLaws';

test('displays component name', async () => {
    const {getByText} = render(<RelevantLaws/>);
    expect(getByText(/relevant laws/i)).toBeInTheDocument();
});