class DataConnector {

    getByCountry(country) {
        return fetch(`https://api.covid19api.com/total/country/${country}?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
            .then(res => res.json());
    }

    getGlobalSummary() {
        return fetch('https://api.covid19api.com/world/total').then(res => res.json());
    }
}

export default DataConnector;
