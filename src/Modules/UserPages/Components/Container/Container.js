import React from 'react';
import './Container.css';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...props}

        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.state.loginCallback();
    }

    render() {
        return (
            <div className="Container">
                <button type="button" onClick={this.handleLoginClick}>Login</button>
            </div>
        );
    }
}

export default Container;
