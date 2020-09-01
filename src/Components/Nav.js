import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className="Nav">
            <Link to="/">Home</Link>
            <Link to="/following">Following</Link>
        </div>
    );
}

export default Nav;
