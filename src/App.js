import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataConnector from "./DataConnector";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '', age: '', connector: new DataConnector()};

        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleNameChange(event) {
        this.setState({...this.state, name: event.target.value});
    }

    handleAgeChange(event) {
        this.setState({...this.state, age: parseInt(event.target.value)});
    }

    submitForm(event) {
        event.preventDefault();
        this.state.connector.saveUser(this.state.name, this.state.age);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <form onSubmit={this.submitForm}>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter a name"
                            value={this.state.name}
                            onChange={this.handleNameChange}/>
                        <input
                            type="number"
                            id="age"
                            placeholder="Enter an age"
                            value={this.state.age}
                            onChange={this.handleAgeChange}/>
                        <button type="submit">Submit</button>
                    </form>
                </header>
            </div>
        );
    }
}

export default App;
