import React from 'react';
import {Link} from "react-router-dom";

class Following extends React.Component {

    constructor(props) {
        super(props);
        this.state = {followings: props.storage.getFollowings()};
    }

    render() {
        return (
            <div className="Following">
                {this.state.followings.map(following =>
                    <Link to={`/${following}`}>{following.toUpperCase()}</Link>
                )}
            </div>
        );
    }
}

export default Following;
