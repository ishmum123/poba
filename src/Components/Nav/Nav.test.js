import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Nav from './Nav';

test('takes to respective pages', () => {
    const history = createMemoryHistory();
    const {getByText} = render(<Router history={history}><Nav/></Router>);

    const pages = [
        {text: 'achievements'},
        {text: 'topics'},
        {text: 'current activities', url: 'current-activities'},
        {text: 'current realities', url: 'current-realities'},
        {text: 'relevant laws', url: 'relevant-laws'},
        {text: 'relevant studies', url: 'relevant-studies'},
        {text: 'relevant authorities', url: 'relevant-authorities'},
        {text: 'past activities', url: 'past-activities'},
        {text: 'home', url: '/'}
    ];

    pages.forEach(page => {
        fireEvent.click(getByText(new RegExp(page.text, 'i')));
        expect(history.entries[history.entries.length - 1].pathname).toContain(page.url || page.text);
    });
});
