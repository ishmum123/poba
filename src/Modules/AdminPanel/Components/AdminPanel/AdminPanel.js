import React from 'react';
import './AdminPanel.css';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class AdminPanel extends React.Component {

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
            <div className="AdminPanel">
                <Button className="Logout-Button" variant="contained" color="primary" type="button" onClick={this.handleLogOutClick}>
                    Log Out
                </Button>
            </div>
        );
    }
}

export default AdminPanel;
