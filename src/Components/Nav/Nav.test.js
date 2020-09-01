import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Nav from './Nav';

let history, get;

beforeEach(() => {
    history = createMemoryHistory();
    get = render(<Router history={history}><Nav/></Router>).getByText;
});

test('takes to "following" page', () => {
    fireEvent.click(get(/following/i));
    expect(history.entries[history.entries.length - 1].pathname).toBe('/following');
});

test('takes to "home" page', () => {
    fireEvent.click(get(/home/i));
    expect(history.entries[history.entries.length - 1].pathname).toBe('/');
});

