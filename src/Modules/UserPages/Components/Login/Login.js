import React from 'react';
import './Login.css';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

class Login extends React.Component {

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
            <Paper className="Login" elevation={5}>
                <FormControl className="form-element">
                    <InputLabel htmlFor="email-input">Email address</InputLabel>
                    <Input id="email-input" aria-describedby="email-address" />
                    {/*<FormHelperText id="email-address">We'll never share your email.</FormHelperText>*/}
                </FormControl>
                <FormControl className="form-element">
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input id="password-input" aria-describedby="password" />
                    {/*<FormHelperText id="password">Your Password here.</FormHelperText>*/}
                </FormControl>
                <Button  className="form-element" variant="contained" color="primary" type="button" onClick={this.handleLoginClick}>
                    Login
                </Button>
            </Paper>
        );
    }
}

export default Login;
