import React from 'react';
import './Container.css';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...props};

        this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleLogOutClick() {
        this.state.logoutCallback();
    }

    render() {
        return (
            <div className="Container">
                <button type="button" onClick={this.handleLogOutClick}>Log Out</button>
            </div>
        );
    }
}

export default Container;
