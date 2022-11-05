import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IMAGES, ROUTES, API } from '../../../configs';
import { Link } from 'react-router-dom';
import { Footer } from '../../elements';
import propTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { getUserSession } from '../../../utils/commons';
import axios from 'axios';

export default class PagePetani extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      
    };
  }

  componentDidMount() {
    const user = getUserSession();
    const { name, accessToken } = user;
    this.setState({ name });
    this._handleCheckToken(accessToken);
  }

  _handleCheckToken = (accessToken) => {
    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token-petani': accessToken,
    };
    axios.get(API.checkTokenPetani, { headers })
      .catch((err) => {
        window.location.href = ROUTES.LOGIN_PETANI();
        localStorage.clear();
      });
  };
  _renderAppBar() {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <div className="navbar">
        <CssBaseline />
        <div className={classes.appBar}>
          <div className="logo">
            <img src={IMAGES.LOGO_GREEN} alt="logo" width={70} />
          </div>
          <div className="rightElement">
            <span>{name.split(' ')[0]}</span>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
            </Avatar>
          </div>
        </div>
      </div>
    );
  }

  render(){
    const { children, classes } = this.props;
    return (
      <div className={classes.container}>
        {this._renderAppBar()}
          <main>
            {children}
        </main>
        <Footer />
        </div>
    );
  }
}

PagePetani.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
};

