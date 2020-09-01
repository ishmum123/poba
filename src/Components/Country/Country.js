import React from 'react';
import DataConnector from "../../Services/DataConnector";
import './Country.css';

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            connector: new DataConnector(),
            data: [],
            followable: !props.storage.getFollowings().includes(props.country)
        };

        this.handleFollowingClick = this.handleFollowingClick.bind(this);
    }

    componentDidMount() {
        this.state.connector
            .getByCountry(this.state.country)
            .then(data => this.setState({...this.state, data}));
    }

    handleFollowingClick() {
        this.state.storage.addFollowing(this.state.country);
        this.setState({...this.state, followable: false});
    }

    render() {
        const {data, country, followable} = this.state;
        return (
            <div className="Country">
                <div className="details">
                    <h1>{country.toUpperCase()}</h1>
                    <button onClick={this.handleFollowingClick} disabled={!followable}>Follow +</button>
                </div>
                <div className="data">
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(datum => (
                            <tr>
                                <td>{new Date(datum.Date).toDateString()}</td>
                                <td>{datum.Confirmed}</td>
                                <td>{datum.Deaths}</td>
                                <td>{datum.Recovered}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Country;
