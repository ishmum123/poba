import React from 'react';
import DataConnector from "../Services/DataConnector";
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
                {['uk', 'usa', 'bangladesh'].map(c => <Link to={`/${c}`}>{c.toUpperCase()}</Link>)}
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
        );
    }
}

export default Home;
