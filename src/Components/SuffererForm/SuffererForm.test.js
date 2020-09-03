import React from 'react';
import {render} from '@testing-library/react';
import SuffererForm from './SuffererForm';

test('displays component name', async () => {
    const {getByText} = render(<SuffererForm/>);
    expect(getByText(/sufferer Form/i)).toBeInTheDocument();
});