import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Country from "./Components/Country";
import Following from "./Components/Following";
import Storage from "./Services/Storage";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {storage: new Storage()};
    }

    render() {
        const {storage} = this.state;
        return (
            <div className="App">
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path="/uk"><Country storage={storage} country="uk"/></Route>
                        <Route path="/usa"><Country storage={storage} country="usa"/></Route>
                        <Route path="/bangladesh"><Country storage={storage} country="bangladesh"/></Route>
                        <Route path="/following"><Following storage={storage}/></Route>
                        <Route path="/"><Home/></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
