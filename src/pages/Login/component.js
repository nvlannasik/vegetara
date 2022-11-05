import React from 'react';
import { ButtonFilled, TextInput, Footer } from '../../components/elements';
import { ROUTES, API } from '../../configs';
import axios from 'axios';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../utils/schemas';
import { setUserSession } from '../../utils/commons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hintUsername: false,
      hintPassword: false,
      error: false,
      errorMessage: ''
    };
  }

  handleLogin = (values) => {
    const { username, password } = values
    const body = {"userName": username,"password": password}
    axios.post(API.login, body, API.header)
      .then((res) => {
        if (res.status === 200) {
          setUserSession(res.data.accessToken, res.data.data)
          window.location.href = ROUTES.LANDING_PAGE()
        }
      })
      .catch((err) => {
        const { response } = err;
        if (response.status === 400) {
          this.setState({ error: true, errorMessage: 'username atau password salah' })
        }else {this.setState({error: true,errorMessage: 'sedang ada maintenance, silahkan coba beberapa saat lagi'})}
      }
    );
  }

  handleFocus = (field) => this.setState(prevState => ({ [field]: !prevState[field] }))
  renderFormLogin = ({ values, errors, touched, handleChange: _handleChange, handleBlur: _handleBlur, handleSubmit: handleLogin, isSubmitting }) => {
    const { hintUsername, hintPassword, error, errorMessage } = this.state;
    return (
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <TextInput
            name="username"
            label="Username"
            value={values.username}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={hintUsername && !touched.username && ('Contoh: lokenHong')}
            hinterror={(touched.username && errors.username) || (error && errorMessage)}
            type="text"
            onFocus={this.handleFocus.bind(this, 'hintUsername')}
          />
          <TextInput
            name="password"
            label="Password"
            value={values.password}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={!touched.password && hintPassword && ('Sandi setidaknya terdiri dari 8 karakter alfanumerik')}
            hinterror={(touched.password && errors.password) || (error && errorMessage)}
            type="password"
            onFocus={this.handleFocus.bind(this, 'hintPassword')}
          />
          <div className="forgotPassWrapper">
            <Link  className="forgotPassword">Lupa Password?</Link>
          </div>
          <div className="buttonWrapper">
            <ButtonFilled type="submit" disabled={isSubmitting} >
            Masuk
            </ButtonFilled>
          </div>
          <div className="registerWrapper">
            <p className="registerText">Belum punya akun?  <Link to={ROUTES.REGISTER()} className="registerLink">Daftar</Link></p>
           
            <p className="registerText"> Anda adalah petani? <Link to={ROUTES.LOGIN_PETANI()} className="registerLink">Klik Disini</Link></p>
          </div>
        </div>
      </form>
    );
  }
   
  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    const initialValues = { username, password };
    return (
      <div className={classes.container}>
        <div className={classes.cardLogin}>
          <div className="cardLoginHeader">
            <Link to={ROUTES.LANDING_PAGE()} className="backButton">
              <ArrowBackIcon />
            </Link>
            <h1>Masuk Sebagai Pembeli</h1>
          </div>
          <div className="cardLoginBody">
            <Formik
              initialValues={initialValues}
              component={this.renderFormLogin}
              validationSchema={loginSchema}
              onSubmit={this.handleLogin}
            />
          </div>
          
        </div>
        <Footer />
      </div>
    );
  }
}