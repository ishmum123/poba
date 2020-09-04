import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className="Nav">
            <Link to="/">Home</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/current-activities">Current Activities</Link>
            <Link to="/current-realities">Current Realities</Link>
            <Link to="/relevant-laws">Relevant Laws</Link>
            <Link to="/relevant-studies">Relevant Studies</Link>
            <Link to="/relevant-authorities">Relevant Authorities</Link>
            <Link to="/past-activities">Past Activities</Link>
        </div>
    );
}

export default Nav;
