import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Country from "../Country/Country";
import Following from "../Following/Following";
import Storage from "../../Services/Storage";
import DataConnector from "../../Services/DataConnector";

function App() {
    const storage = new Storage();
    const connector = new DataConnector();
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/uk"><Country connector={connector} storage={storage} country="uk"/></Route>
                    <Route path="/usa"><Country connector={connector} storage={storage} country="usa"/></Route>
                    <Route path="/bangladesh">
                        <Country connector={connector} storage={storage} country="bangladesh"/>
                    </Route>
                    <Route path="/following"><Following storage={storage}/></Route>
                    <Route path="/"><Home connector={connector}/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
