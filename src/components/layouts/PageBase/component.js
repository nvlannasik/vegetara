import React from 'react';

import { SearchBar } from '../../elements';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from '../../../configs';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

export default class PageBase extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  _renderSidebar() {
    const { classes } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <div className={clsx({ [classes.sidebarHide]: sidebarOpen === false, [classes.sidebarShow]: sidebarOpen === true })} >
        <div className="sidebar">
          <div className="sidebarHeader">
            <a onClick={this.handleClick}>close</a>
            <div className="sidebarHeaderTitle" >
              
            <h1>Logo</h1>
          </div>
          <div className="sidebarHeaderIcon">
            <AddShoppingCartIcon />
          </div>
        </div>
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


  _renderAppBar() {
    const { classes } = this.props;
    const { sidebarOpen } = this.state;
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
          <div className="rightElement">
            <div className="searchBar">
              <SearchBar />
            </div>
            <div className="trolli">
              <AddShoppingCartIcon/>
            </div>
            <div className="menuIcon">
              <MenuIcon onClick={this.handleClick} />
            </div>
          </div>
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
        {sidebarOpen?this._renderSidebar():null}
          <main>
            {children}
          </main>
        </div>
    );
  }
}