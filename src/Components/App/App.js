import React from 'react';
import './App.css';

const UserPages = React.lazy(() => import('../../Modules/UserPages/Components/Container/Container'));
const AdminPanel = React.lazy(() => import('../../Modules/AdminPanel/Components/Container/Container'));

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {admin: false};

        this.changeLoginState = this.changeLoginState.bind(this);
    }

    changeLoginState() {
        this.setState({admin: !this.state.admin})
    }

    render() {
        return (
            <div className="App">
                <React.Suspense fallback={<div>Loading...</div>}>
                    {this.state.admin ?
                        <AdminPanel logoutCallback={this.changeLoginState}/> :
                        <UserPages loginCallback={this.changeLoginState}/>}
                </React.Suspense>
            </div>
        );
    }
}

export default App;
