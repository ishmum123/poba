import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Following from "./Following";

const mockFn = jest.fn(_ => ['usa', 'bangladesh']);

const mockStorage = {getFollowings: mockFn};

beforeEach(() => mockFn.mockClear());

test('displays all followings', () => {
    const {getByText} = render(<BrowserRouter><Following storage={mockStorage}/></BrowserRouter>);

    const usaLink = getByText(/usa/i);
    expect(usaLink).toBeInTheDocument();

    const bdLink = getByText(/bangla/i);
    expect(bdLink).toBeInTheDocument();
});

test('takes to respective country\'s page', () => {
    const history = createMemoryHistory();
    const {getByText} = render(<Router history={history}><Following storage={mockStorage}/></Router>);

    fireEvent.click(getByText(/usa/i));
    expect(history.entries[history.entries.length - 1].pathname).toBe('/usa');
});



