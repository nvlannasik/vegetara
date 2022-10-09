import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { IMAGES } from '../../configs';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@mui/material/TextField';
import { ButtonFilled, ButtonGhost } from '../../components/elements';
import { ROUTES, API } from '../../configs';
import axios from 'axios';

export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    axios.post(API.login, {
      "email": "admin@email.com",
      "password": "123345465"
    },API.header).then((res) => {
      console.log(res);
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  }
  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <div className={classes.container}>
        <CssBaseline />
        <div className={classes.cardLogin}>
          <div className="cardLoginHeader">
            <h1>Login</h1>
            <p>Belum punya akun? <a href="/register">Daftar</a></p>
            <p>Lupa password? <a href="/register">Reset</a></p>
          </div>
          <div className="cardLoginBody">
            <div className="formLogin">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <TextField

                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <ButtonFilled className="btn-login" onClick={this.handleLogin}>Login</ButtonFilled>
              
            </div>
            <div className="cardLoginBodyFooter">
              <p>atau login dengan</p>
              <div className="cardLoginBodyFooterIcon">
                <img src={IMAGES.GOOGLE} alt="google" />
                <img src={IMAGES.FACEBOOK} alt="facebook" />
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}