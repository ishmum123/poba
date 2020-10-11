import React from "react";
import "./AdminPanel.css";
import Button from "@material-ui/core/Button";
import TopicList from "../TopicList/TopicList";

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleLogOutClick() {
    this.state.logoutCallback();
  }

  render() {
    return (
      <div className="AdminPanel">
        <div className="NavBar">
          <Button
            className="Logout-Button"
            variant="contained"
            color="primary"
            type="button"
            onClick={this.handleLogOutClick}
          >
            Log Out
          </Button>
        </div>

        <TopicList />
      </div>
    );
  }
}

export default AdminPanel;
