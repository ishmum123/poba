import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Home from './Home';
import {BrowserRouter, Router} from 'react-router-dom';
import {waitForElement} from "@testing-library/dom";
import {createMemoryHistory} from 'history';

const mockFn = jest.fn(_ => Promise.resolve({TotalConfirmed: 3500, TotalDeaths: 350, TotalRecovered: 3300}));

const mockConnector = {getGlobalSummary: mockFn};

beforeEach(() => mockFn.mockClear());

test('displays global summary', async () => {
    const {getByTitle, getByText} = render(<BrowserRouter><Home connector={mockConnector}/></BrowserRouter>);

    const elem = await waitForElement(() => getByText(/uk/i));
    expect(elem).toBeInTheDocument();

    const confirmed = getByTitle('confirmed').innerHTML;
    expect(confirmed).toBe('3500');

    const deaths = getByTitle('deaths').innerHTML;
    expect(deaths).toBe('350');

    const recovered = getByTitle('recovered').innerHTML;
    expect(recovered).toBe('3300');
});

test('takes to respective country\'s page', () => {
    const history = createMemoryHistory();
    const {getByText} = render(<Router history={history}><Home connector={mockConnector}/></Router>);

    fireEvent.click(getByText(/uk/i));
    expect(history.entries[history.entries.length - 1].pathname).toBe('/uk');
});



