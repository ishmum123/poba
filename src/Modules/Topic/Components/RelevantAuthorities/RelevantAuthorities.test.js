import React from 'react';
import {render} from '@testing-library/react';
import RelevantAuthorities from './RelevantAuthorities';

test('displays component name', async () => {
    const {getByText} = render(<RelevantAuthorities/>);
    expect(getByText(/relevant authorities/i)).toBeInTheDocument();
});