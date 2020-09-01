import React from 'react';
import Country from "./Country";
import {fireEvent, render} from '@testing-library/react';
import {waitForElement} from "@testing-library/dom";

const mockCountryDataFn = jest.fn(_ => Promise.resolve([
    {Date: new Date().toISOString(), Confirmed: 1530, Deaths: 530, Recovered: 2500},
    {Date: new Date().toISOString(), Confirmed: 2530, Deaths: 230, Recovered: 3500},
    {Date: new Date().toISOString(), Confirmed: 7530, Deaths: 630, Recovered: 3500},
    {Date: new Date().toISOString(), Confirmed: 3530, Deaths: 30, Recovered: 500},
]));
const mockConnector = {getByCountry: mockCountryDataFn}

const mockGetFollowingsFn = jest.fn(_ => []);
const mockAddFollowingFn = jest.fn(_ => []);
const mockStorage = {getFollowings: mockGetFollowingsFn, addFollowing: mockAddFollowingFn};

beforeEach(() => {
    mockAddFollowingFn.mockClear();
    mockCountryDataFn.mockClear();
    mockGetFollowingsFn.mockClear();
});

test('displays all data', async () => {
    const {getByTitle, getByText} = render(<Country connector={mockConnector} storage={mockStorage}
                                                    country="bangladesh"/>);

    const elem = await waitForElement(() => getByText(/bangla/i));
    expect(elem).toBeInTheDocument();

    const tableData = getByTitle(/data/i).children;
    expect(tableData.length).toBe(4);
    expect(tableData[0].children[1].innerHTML).toBe('1530');
});

test('can follow country', () => {
    const {getByText} = render(<Country connector={mockConnector} storage={mockStorage} country="bangladesh"/>);

    fireEvent.click(getByText(/follow/i));
    expect(mockAddFollowingFn).toHaveBeenCalledWith('bangladesh');
});



