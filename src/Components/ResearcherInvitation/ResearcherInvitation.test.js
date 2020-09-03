import React from 'react';
import {render} from '@testing-library/react';
import ResearcherInvitation from './ResearcherInvitation';

test('displays component name', async () => {
    const {getByText} = render(<ResearcherInvitation/>);
    expect(getByText(/researcher invitation/i)).toBeInTheDocument();
});