import React from 'react';
import './UserPages.css';
import Login from "../Login/Login";

class UserPages extends React.Component {

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
            <div className="UserPages">
                <Login loginCallback={this.handleLoginClick}/>
            </div>
        );
    }
}

export default UserPages;
