import React from 'react';

import { SearchBar } from '../../elements';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from '../../../configs';
import { Link } from 'react-router-dom';
import { getUserSession } from '../../../utils/commons';
import { SwipeableDrawer, Divider, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import { Footer } from '../../elements';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Badge from "@material-ui/core/Badge";
import propTypes from 'prop-types';


import clsx from 'clsx';

export default class PageBase extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      name: '',
      
    };
  }

  componentDidMount() {
    const user = getUserSession();
    const { name } = user;
    this.setState({ user, name });
  }

  handleClick = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  _renderDrawer() {
    const { classes } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <SwipeableDrawer 
        open={sidebarOpen}
        onClose={this.handleClick}
        onOpen={this.handleClick}
        className={classes.drawer}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="About">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Tentang Kami" />
          </ListItem>
          <ListItem button key="Contact">
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Kontak" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    );
  }


  _renderSidebar() {
    const { classes } = this.props;
    const { sidebarOpen, name } = this.state;
    return (
      <div className={clsx({ [classes.sidebarHide]: sidebarOpen === false, [classes.sidebarShow]: sidebarOpen === true })} >
        <div className="sidebar">
        <div className="sidebarBody">
          <div className="sidebarBodyItem">
            <Link to={ROUTES.LANDING_PAGE()}>
              <h1>Home</h1>
            </Link>
          </div>
          <div className="sidebarBodyItem">
              <Link to={ROUTES.LANDING_PAGE()}>
                <h1>Kontak Kami</h1>
              </Link>
          </div>
          <div className="sidebarBodyItem">
              <Link to={ROUTES.LANDING_PAGE()}>
                <h1>Kontak Kami</h1>
              </Link>
            </div>
            <div className="sidebarBodyItem">
              <Link to={ROUTES.LANDING_PAGE()}>
                <h1>dafar</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderRightElement() {
    const { badge } = this.props;
    return (
      <div className="rightElement">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="trolli">
          <Link >
          <Badge badgeContent={badge} color="primary">
            <AddShoppingCartIcon />
          </Badge>
          </Link>
        </div>
        <div className="menuIcon">
          <MenuIcon onClick={this.handleClick} />
        </div>
      </div>
    );
  }
  _renderAkun() {
    const { name } = this.state;
    return (
      <div className="rightElement">
        {name}
      </div>
    );
  }

  _renderAppBar() {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <div className="navbar">
        <CssBaseline />
        <div className={classes.appBar}>
          <div className="logo">
            <h1>Vegetara</h1>
          </div>
          <div className="menu">
            <div className="menuItem">
              <ul>
                <li>
                  <Link to={ROUTES.ABOUT()} className={classes.link}>Beranda</Link>
                </li>
                <li><Link to={ROUTES.ABOUT()}>Tentang Kami</Link></li>
                <li><Link to={ROUTES.ABOUT()} >Kontak</Link></li>
              </ul>
            </div>
          </div>
          {name ? this._renderAkun() : this._renderRightElement()}
        </div>
      </div>
    );
  }

  render(){
    const { children, classes } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <div className={clsx(classes.container,{ [classes.main]: sidebarOpen === true})}>
        {this._renderAppBar()}
        { this._renderDrawer()}
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
  badge: propTypes.number,
};

PageBase.defaultProps = {
  badge: 0,
};
