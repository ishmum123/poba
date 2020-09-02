import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {connector: props.connector, confirmed: '', deaths: '', recovered: ''};
    }

    componentDidMount() {
        this.state.connector
            .getGlobalSummary()
            .then(summary => this.setState({
                ...this.state,
                confirmed: summary.TotalConfirmed,
                deaths: summary.TotalDeaths,
                recovered: summary.TotalRecovered
            }));
    }

    render() {
        const {confirmed, deaths, recovered} = this.state;
        return (
            <div className="Home">
                <div className="countries">
                    {['uk', 'usa', 'bangladesh'].map(country =>
                        <span className="button" key={country}>
                            <Link to={`/${country}`}>{country.toUpperCase()}</Link>
                        </span>
                    )}
                </div>
                <div className="summary">
                    <table>
                        <thead>
                        <tr>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td title="confirmed" key="confirmed">{confirmed}</td>
                            <td title="deaths" key="deaths">{deaths}</td>
                            <td title="recovered" key="recovered">{recovered}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home;
