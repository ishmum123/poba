import React from 'react';
import './Home.css';
import DataConnector from "../../Services/DataConnector";
import {Link} from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {connector: new DataConnector(), confirmed: '', deaths: '', recovered: ''};
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
        return (
            <div className="Home">
                <div className="countries">
                    {['uk', 'usa', 'bangladesh'].map(country =>
                        <span className="button">
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
                            <td title="confirmed">{this.state.confirmed}</td>
                            <td title="deaths">{this.state.deaths}</td>
                            <td title="recovered">{this.state.recovered}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home;
