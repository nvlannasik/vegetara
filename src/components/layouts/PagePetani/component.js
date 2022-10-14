import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ROUTES, IMAGES } from '../../../configs';
import { Link } from 'react-router-dom';
import { Footer } from '../../elements';
import propTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


import clsx from 'clsx';

export default class PageBase extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'ajooo',
      
    };
  }

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
            <span>{name}</span>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {name[0].toUpperCase()}
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

PageBase.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
};

