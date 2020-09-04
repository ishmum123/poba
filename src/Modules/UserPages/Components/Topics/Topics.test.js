import React from 'react';
import {render} from '@testing-library/react';
import Topics from './Topics';

test('displays component name', async () => {
    const {getByText} = render(<Topics/>);
    expect(getByText(/topics/i)).toBeInTheDocument();
});